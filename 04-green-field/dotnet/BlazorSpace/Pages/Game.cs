// Game.cs
using Microsoft.JSInterop;
using Blazor.Extensions.Canvas.Canvas2D;
public class Game
{
    public event Action OnUpdate;
    public Rectangle Ship { get; } = new Rectangle(400, 500, 50, 100, "green");
    public List<Rectangle> Enemies { get; } = new List<Rectangle>
    {
        new Rectangle(200, 50, 50, 100, "red"),
        new Rectangle(400, 50, 50, 100, "red"),
        new Rectangle(600, 50, 50, 100, "red"),
    };

    public Game()
    {
        this.Enemies.ForEach(enemy => enemy.Speed = 1);
    }

    public bool IsColliding(Rectangle rect1, Rectangle rect2)
    {
        return rect1.X < rect2.X + rect2.Width &&
               rect1.X + rect1.Width > rect2.X &&
               rect1.Y < rect2.Y + rect2.Height &&
               rect1.Y + rect1.Height > rect2.Y;
    }

    public void OnKeyDown(string key)
    {
        // print key to console
        Console.WriteLine(key);
        switch (key)
        {
            case "a":
                Ship.X -= 10;
                break;
            case "d":
                Ship.X += 10;
                break;
        } 
    }

    public void Update()
    {

        // Move the enemies down the screen
        foreach (var enemy in Enemies)
        {
            enemy.Y += enemy.Speed;
            if (enemy.Y >= 600)
            {
                enemy.X = -200;
                enemy.Speed = 0;
            }
        }

        // Check for collisions between the ship and the enemies
        foreach (var enemy in Enemies)
        {
            if (IsColliding(Ship, enemy))
            {
                // Handle collision (end game, reduce health, etc.)
                // destroy Ship
                Ship.X = -100;
            }
        }

        // Remove enemies that have moved off the screen
        Enemies.RemoveAll(enemy => enemy.Y > 600);
    }

    public async Task Draw(Canvas2DContext context)
    {
        // Console.WriteLine("Drawing");
        await context.ClearRectAsync(0, 0, 800, 600);
        await context.SetFillStyleAsync("black");
        await context.FillRectAsync(0, 0, 800, 600);
    
        await Ship.Draw(context);
        foreach (var enemy in Enemies)
        {
            await enemy.Draw(context);
        }
        await context.EndBatchAsync();
        OnUpdate?.Invoke();
    }
}

// Rectangle.cs
public class Rectangle
{
    public double X { get; set; }
    public double Y { get; set; }
    public double Width { get; set; }
    public double Height { get; set; }
    public string Color { get; set; }

    public int Speed { get; set; }

    public Rectangle(double x, double y, double width, double height, string color)
    {
        X = x;
        Y = y;
        Width = width;
        Height = height;
        Color = color;
    }

    public async Task Draw(Canvas2DContext context)
    {
        await context.SetFillStyleAsync(Color);
        await context.FillRectAsync(X, Y, Width, Height);
    }
}