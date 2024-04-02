import pygame
import sys
import random

# define missile properties
MISSILE_COLOR = (255, 255, 255)
MISSILE_WIDTH, MISSILE_HEIGHT = 10, 20


# Set up some constants
WIDTH, HEIGHT = 800, 600
SHIP_WIDTH, SHIP_HEIGHT = 50, 50
ENEMY_WIDTH, ENEMY_HEIGHT = 50, 50
SHIP_COLOR = (0, 255, 0)
ENEMY_COLOR = (255, 0, 0)


class Player:
    def __init__(self, x, y, width, height, color):
        self.image = pygame.image.load('assets/player.png')
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)

        self.color = color
        self.lives = 3
        self.start_x = x
        self.start_y = y
        self.last_missile_time = 0
        self.MISSILE_COOLDOWN = 700 

    def handle_keys(self, keys, current_time, missiles):
        if keys[pygame.K_LEFT]:
            self.rect.x -= 5  # Move left
        if keys[pygame.K_RIGHT]:
            self.rect.x += 5  # Move right
        if keys[pygame.K_SPACE]:  # Shoot a missile
            self.shoot(current_time, missiles)

    def moveLeft(self):
        self.rect.x -= 5

    def keep_within_screen(self):
        if self.rect.x < 0:
            self.rect.x = 0
        if self.rect.x > WIDTH - SHIP_WIDTH:
            self.rect.x = WIDTH - SHIP_WIDTH

    def reset(self):
        self.rect.x = self.start_x
        self.rect.y = self.start_y

    def moveRight(self):
        self.rect.x += 5

    def shoot(self, current_time, missiles):
        if  current_time - self.last_missile_time >= self.MISSILE_COOLDOWN:
            missile = pygame.Rect(self.rect.x + SHIP_WIDTH // 2, self.rect.y, MISSILE_WIDTH, MISSILE_HEIGHT)
            missiles.append(missile)
            self.last_missile_time = current_time

    def draw(self, screen):
        screen.blit(self.image, self.rect.topleft)

class Enemy:
    def __init__(self, x, y, width, height, color):
        self.image = pygame.image.load('assets/enemy.png')
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)
    
        self.dx = 5
       
        self.start_x = self.rect.x
        self.color = color
        self.direction = 'right'
        self.dx = 5
        self.last_laser_time = 0
        self.LASER_COOLDOWN = 2000 

    def move(self):
        
        # enemy moves left for 100 px then changes direction
        if self.direction == 'right':
            self.rect.x += self.dx
            if self.rect.x >= self.start_x + 100:  # The enemy moved 50 pixels to the right
                self.direction = 'left'
        else:  # direction == 'left'
            self.rect.x -= self.dx
            if self.rect.x <= self.start_x:  # The enemy moved back to its starting position
                self.direction = 'right'
        self.rect.clamp_ip(screen.get_rect())

    def shoot(self, current_time, enemy_lasers):
        if current_time - self.last_laser_time >= self.LASER_COOLDOWN:
            laser = pygame.Rect(self.rect.x + self.rect.width // 2, self.rect.y + self.rect.height, MISSILE_WIDTH, MISSILE_HEIGHT)
            enemy_lasers.append(laser)
            self.last_laser_time = current_time
       

    def draw(self, screen):
        screen.blit(self.image, self.rect.topleft)


# Initialize Pygame
pygame.init()



# Create the screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))




clock = pygame.time.Clock()



ENEMY_LASER_COLOR = (0, 255, 0)  # Green color for the enemy lasers

font = pygame.font.Font(None, 72)
# Create a list of enemy lasers

ENEMY_LASER_COOLDOWN = 2000
last_enemy_laser_time = 0

class Game:
    def __init__(self):
        self.level = 1
        self.levels = {
            1: 1
            ,2: 2
           #  ,3: 3
        }
        self.player = Player(WIDTH // 2, HEIGHT - SHIP_HEIGHT - 10- 50, SHIP_WIDTH, SHIP_HEIGHT, SHIP_COLOR)
        self.enemies = []
        self.create_enemies(self.level)
        self.missiles = []
        
        self.enemy_lasers = []
        self.last_missile_time = 0
        self.MISSILE_COOLDOWN = 700  # 300ms cooldown
        self.life_image = pygame.image.load('assets/life.png')

    def create_enemies(self, level):
        enemy_space = WIDTH // self.levels[level]
        self.enemies = [Enemy(i * enemy_space + enemy_space // 2 - ENEMY_WIDTH // 2, 10, ENEMY_WIDTH, ENEMY_HEIGHT, ENEMY_COLOR) for i in range(self.levels[level])]

    def update_missiles(self):
        for missile in self.missiles:
            missile.y -= 15  # Move the missile upwards
            if missile.y < 0:  # The missile hit the top of the screen
                self.missiles.remove(missile)
            for enemy in self.enemies[:]:
                if missile.colliderect(enemy):  # The missile hit an enemy
                    self.missiles.remove(missile)
                    self.enemies.remove(enemy)

    def display_win_message(self):
        win_text = font.render("You win", True, (255, 255, 255))  # White text
        screen.blit(win_text, ((WIDTH - win_text.get_width()) // 2, (HEIGHT - win_text.get_height()) // 2))
        pygame.display.flip()

    def reset(self):
        print('resetting')
        self.level = 1
        self.player = Player(WIDTH // 2, HEIGHT - SHIP_HEIGHT - 10-50, SHIP_WIDTH, SHIP_HEIGHT, SHIP_COLOR)
        self.create_enemies(self.level)
        self.missiles = []
        self.enemy_lasers = []

    def advance_level(self):
        self.level += 1
        self.create_enemies(self.level)
        self.player.reset()
        self.missiles = []
        self.enemy_lasers = []

    def display_game_over_message(self):
        game_over_text = font.render("Game over", True, (255, 255, 255))  # White text
        screen.blit(game_over_text, ((WIDTH - game_over_text.get_width()) // 2, (HEIGHT - game_over_text.get_height()) // 2))
        pygame.display.flip()

    def update_enemy_lasers(self):
        for laser in self.enemy_lasers:
            laser.y += 10  # Move the laser downwards
            if laser.colliderect(self.player.rect):  # The laser hit the player
                self.player.lives -= 1
                self.player.reset()
                self.enemy_lasers.remove(laser)
            elif laser.y > HEIGHT:  # The laser went off the bottom of the screen
                self.enemy_lasers.remove(laser)

    def draw_lives(self, screen):
        for i in range(self.player.lives):
            screen.blit(self.life_image, (WIDTH - 20 - i * 30 - 20, HEIGHT - 20 - 20))

    def run(self):
        while True:
            clock.tick(30)
            current_time = pygame.time.get_ticks()
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if event.type == pygame.MOUSEBUTTONDOWN and (not self.enemies or self.player.lives <= 0):
                    self.reset()

            # Make the enemies shoot every 2 seconds
            for enemy in self.enemies:
                enemy.shoot(current_time, self.enemy_lasers)

            # If the player has no more lives, display a "Game over" message
            if self.player.lives <= 0:
                self.display_game_over_message()
                continue

            keys = pygame.key.get_pressed()
            self.player.handle_keys(keys, current_time, self.missiles)
            self.player.keep_within_screen()
            self.update_enemy_lasers()
            self.update_missiles()

            # Fill the screen with black
            screen.fill((0, 0, 0))

            for laser in self.enemy_lasers:
                pygame.draw.rect(screen, ENEMY_LASER_COLOR, laser)

            # Draw the player
            self.player.draw(screen)

            self.draw_lives(screen)            

            # Draw the enemies
            for enemy in self.enemies:
                enemy.move()
                enemy.draw(screen)

            # Draw the missiles
            for missile in self.missiles:
                pygame.draw.rect(screen, MISSILE_COLOR, missile)

            # If there are no more enemies, display a "You win" message
            if not self.enemies:
                if self.level < len(self.levels):
                    self.advance_level()
                elif self.level == len(self.levels):
                    # print('You win')
                    self.display_win_message()
                    continue
                else:
                    print('Unclear', self.level)
                    

            # Update the display
            pygame.display.flip()

game = Game()
game.run()
