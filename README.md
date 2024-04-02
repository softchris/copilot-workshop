# Copilot Master class Workshop
 
This is a workshop to help you get started with GitHub Copilot. The idea is to teach you how to use Copilot effectively in your day-to-day coding tasks. To show you how to use Copilot, this workshop have different sections and each section will have a set of exercises.

## Recommended prerequisites

- Basic understanding of programming in the language of your choice.
- Visual Studio Code installed.
- A GitHub account. 

## Prompts

Prompts are the way you interact with Copilot. A prompt in this workshop is shown in the following way, clearly highlighted:

> PROMPT: "build a space game that contains a ship you control, should be a green rectangle, and 3 enemy fighters placed at the top of the screen. The screen is 800x600 pixels and uses a canvas element"

The idea is you type the prompt in your in the Copilot Chat input and Copilot will generate code for you.

## Narrative - Building a Space Invaders game

To ensure you have a great time learning, this workshop has a narrative namely to build a Space Invaders game. This narrative will help you understand how to use Copilot in more real looking scenario.

![Space game](./06%20cli/copilot-cli-gif.gif)

## Sections

| Section | Description | Link |
| --- | --- | --- |
| Setup and installation | In this section, we will cover installations and setup of Copilot. | [Go to section](./01%20Setup%20and%20installation/README.md) |
| Modalities | In this section, we will cover different modalities and hot work with suggestions and how to accept/reject them. | [Go to section](./02%20Modalities/README.md) |
| How to think | Here we will describe how to think about the problem how to work with prompting and iterate on your solution. | [Go to section](./03%20How%20to%20think/README.md) |
| Green field | In this section, we will describe how to start a new project and how your initial prompt can help you. | [Go to section](./04%20Green%20field/README.md) |
| Brown field | In this section, we will describe how to work with existing codebase and how Copilot can help you improve it. | [Go to section](./05%20Brown%20field/README.md) |
| CLI | In this section, we will describe how you can use Copilot from the command line and especially in the context of managing your projects. | [Go to section](./06%20CLI/README.md) |
## Supported programming languages

This workshop is designed to work with `JavaScript` by default. Support is currently being added for the following languages:

- Java
- Python
- .NET/C#

To find a specific language, check for sub folders for each section being called either `javascript`, `java`, `python`, or `dotnet`.

## Assets

To build a space game, you will need some assets. Each section has its own `assets` folder.

If you want to improve the game, you can use the `assets` folder found in the [04 Green field assets](./04-green-field/assets/) section, as it contains a large variety of graphics and these exercises only implements a subset.
