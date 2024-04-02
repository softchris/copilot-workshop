// Main.java
import javax.swing.*;
import java.awt.*;
import javax.swing.AbstractAction;
import java.awt.event.ActionEvent;
import java.awt.event.MouseEvent;
import java.awt.event.*;
import java.util.Iterator;
import java.util.List;
import java.util.ArrayList;
import java.awt.Rectangle;
import java.util.Random;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.awt.image.BufferedImage;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Space Game");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 650);
        frame.add(GamePanel.getInstance());
        frame.setVisible(true);
    }
}



class EnemyLaser extends Laser {

    public EnemyLaser(int x, int y) {
        super(x, y);
    }

    @Override
    void update() {
        y += SPEED;
        bounds.setLocation(x, y);
    }

    @Override
    void draw(Graphics g) {
        g.setColor(Color.GREEN);
        g.fillRect(x, y, WIDTH, HEIGHT);
    }
}

class Laser {
    int x, y;
    static final int SPEED = 5;
    static final int WIDTH = 4, HEIGHT = 10;
    Rectangle bounds;

    public Laser(int x, int y) {
        this.x = x;
        this.y = y;
        this.bounds = new Rectangle(x, y, WIDTH, HEIGHT);
    }

    Rectangle getBounds() {
        return new Rectangle(x, y, WIDTH, HEIGHT);
    }

    void update() {
        y -= SPEED;
        bounds.setLocation(x, y);
    }

    void draw(Graphics g) {
        g.setColor(Color.RED);
        g.fillRect(x, y, WIDTH, HEIGHT);
    }
}

class EnemyShip extends Ship {
    int startX;
    int dx = 2;
    int stopDx;
    long lastFire = System.currentTimeMillis();
   

    public EnemyShip(int x, int y, int width, int height, Color color) {
        super(x, y, width, height, color,"assets/enemy.png");
        this.startX = x;
        Random rand = new Random();
        stopDx = rand.nextInt(51) + 50;  // Generates a random number between 50 and 100
    }

    void update() {
        x += dx;
        if (Math.abs(x - startX) > stopDx) {
            dx *= -1;
            startX = x;
        }

        if (System.currentTimeMillis() - lastFire >= 3000) {
            GamePanel.getInstance().lasers.add(new EnemyLaser(x + width / 2, y + height));
            lastFire = System.currentTimeMillis();
        }
    }
}

class GamePanel extends JPanel implements MouseListener {
    private Ship player;
    private List<EnemyShip> enemies;
    public List<Laser> lasers = new ArrayList<>();
    private long lastFire = 0;
    private int score = 0;
    private String systemMessage = "";

    // add singleton instance of GamePanel
    public static GamePanel instance;

    // add getter for instance
    public static GamePanel getInstance() {
        if (instance == null) {
            instance = new GamePanel();
        }
        return instance;
    }

    private GamePanel() {
        setBackground(Color.BLACK);

        player = new Ship(375, 550, 50, 50, Color.GREEN, "assets/player.png");
        enemies = new ArrayList<>();
        enemies.add(new EnemyShip(200, 50, 50, 50, Color.RED));
        enemies.add(new EnemyShip(375, 50, 50, 50, Color.RED));
        enemies.add(new EnemyShip(550, 50, 50, 50, Color.RED));

        setFocusable(true);
        addMouseListener(this);

        bindKeyWithAction("A", () -> player.moveLeft());
        bindKeyWithAction("D", () -> player.moveRight());
        bindKeyWithAction("W", () -> player.moveUp());
        bindKeyWithAction("S", () -> player.moveUp());
        bindKeyWithAction("SPACE", () -> {
            if (System.currentTimeMillis() - lastFire >= 500) {
                lasers.add(new Laser(player.getX() + player.getWidth() / 2, player.getY()));
                lastFire = System.currentTimeMillis();
            }
        });

        Timer timer = new Timer(16, e -> repaint());
        timer.start();
    }

    private void bindKeyWithAction(String key, Runnable action) {
        getInputMap(JComponent.WHEN_IN_FOCUSED_WINDOW).put(KeyStroke.getKeyStroke(key), key);
        getActionMap().put(key, new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // print to console when key is pressed
                // System.out.println(key);
                action.run();
                // repaint();
            }
        });
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        if (systemMessage != "") {
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 100));
            g.drawString(systemMessage, getWidth() / 2 - 50, getHeight() / 2);
            return;
        }

        if (enemies.isEmpty()) {
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 30));
            g.drawString("You've won!", getWidth() / 2 - 50, getHeight() / 2);
            return;
        }

        player.draw(g);
        for (EnemyShip enemy : enemies) {
            enemy.update();
            enemy.draw(g);
        }

        for (Iterator<Laser> iterator = lasers.iterator(); iterator.hasNext();) {
            Laser laser = iterator.next();
            laser.update();
            laser.draw(g);
            for (Ship enemy : enemies) {
                if (laser.getBounds().intersects(enemy.getBounds())) {
                    iterator.remove();
                    // remove enemy from array
                    enemies.remove(enemy);
                    score += 50;
                    break;
                }
            }
            if (laser.y + Laser.HEIGHT < 0) {
                iterator.remove();
            }
        }
        g.setColor(Color.WHITE);
        g.drawString("Score: " + score, getWidth() - 100, 20);
    }

    @Override
    public void mouseClicked(MouseEvent e) {
        // print
        System.out.println("Mouse clicked");
        // TODO Auto-generated method stub
        if (enemies.isEmpty()) {
            resetGame();
        }
    }

    private void resetGame() {
       
        player = new Ship(375, 550, 50, 50, Color.GREEN,"assets/player.png");
        enemies = new ArrayList<>();
        lasers = new ArrayList<>();
        score = 0;

        Timer countdownTimer = new Timer(1000, null);
        countdownTimer.setInitialDelay(0);
        
    
        countdownTimer.addActionListener(new ActionListener() {
        int countdown = 3;

            @Override
            public void actionPerformed(ActionEvent e) {
                // display countdown as a huge number in the center of the screen
                systemMessage = String.valueOf(countdown);
                countdown--;

                if (countdown <= 0) {
                    countdownTimer.stop();
                    enemies.add(new EnemyShip(200, 50, 50, 50, Color.RED));
                    enemies.add(new EnemyShip(375, 50, 50, 50, Color.RED));
                    enemies.add(new EnemyShip(550, 50, 50, 50, Color.RED));
                    systemMessage = "";
                }
                repaint();
            }
        });
        countdownTimer.start();
    }

    @Override
    public void mousePressed(MouseEvent e) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void mouseReleased(MouseEvent e) {
        // TODO Auto-generated method stub
       
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        // TODO Auto-generated method stub
       
    }

    @Override
    public void mouseExited(MouseEvent e) {
        // TODO Auto-generated method stub
       
    }
}

class Ship {
    protected int x, y, width, height;
    protected Color color;
    private BufferedImage image;

    public Ship(int x, int y, int width, int height, Color color, String path) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        try {
            image = ImageIO.read(new File(path));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    Rectangle getBounds() {
        return new Rectangle(x, y, width, height);
    }

    // add methods for accessing x and y
    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    // add methods to move the ship
    public void moveLeft() {
        x -= 5;
    }

    public void moveRight() {
        x += 5;
    }

    public void moveUp() {
        y -= 5;
    }

    public void moveDown() {
        y += 5;
    }

    public void draw(Graphics g) {
        g.drawImage(image, x, y, width, height, null);
    }
}