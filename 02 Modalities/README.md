## Modalities

In GitHub Copilot, you can work with different modalities to interact with the AI. The modalities are:

- inline editing, which means you can edit the code directly in the editor and you will get suggestions based on the context. How these suggestions appear is either:

  - you typing a comment followed by SPACE or RETURN key.

## Working with suggestions in inline editing

GitHub Copilot provides suggestions based on the context of the code you are writing. You can accept, reject, or suggest a new code snippet.

- **Accept**, To accept a suggestion, you can press the TAB key or click on the suggestion.
- **Reject**, To reject a suggestion, you can press the ESC key.
- **Partial accept**, To accept a part of the suggestion, type the forward arrow key (→).

## DEMO

In this demo, we will see how to work with suggestions in GitHub Copilot.

1. Open the file [demo.js](./demo.js) new file in Visual Studio Code.
1. Type the comment `// create a function that adds two numbers` and press the SPACE key. Your code will look like this:

    ```js
    // create a function that adds two numbers
    function add(a, b) {
        return a + b;
    }
    ```

## Working with Chat

The Chat, is another modality in GitHub Copilot, where you can interact with the AI in a chat-like interface. You can ask questions, get suggestions, and more.

There are two ways the chat understands your input:

- Selecting rows, when you select a row/rows, the Chat assumes the context is the selected rows.
- No selection, when you don't select row, the Chat assumes the context is the entire file.

To use the chat, select the Chat icon in the left sidebar of Visual Studio Code.

## DEMO: using the chat

1. Open the file [demo-chat.js](./demo-chat.js) in Visual Studio Code and make sure that the Chat is open.
1. Type the following text 

    "create a javascript function that creates a histogram, it takes a character as input"

    You should see the following output:
    
    ```text
    Sure, here's a simple function in JavaScript that creates a histogram. This function takes a character and an array of numbers as input. The character is used to draw the histogram and the array of numbers represents the heights of the bars in the histogram.
    ```

    and the code:

    ```js
    function createHistogram(character, array) {
        let histogram = '';
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i]; j++) {
                histogram += character;
            }
            histogram += '\n';
        }
        return histogram;
    }
    ```

    You now have two options, copy the code or insert it at cursor position.

1. Let's insert the code at the cursor position, select the icon or press Ctrl + Enter.

    The code will be inserted at the cursor position. This is a great feature in case you want to insert the code at a specific location.

## Challenge

Try to create several functions in a file using the Chat modality. Select one of the functions, write a prompt to create a new function, select to insert the code at the cursor position. You will now see how your code is being replaced with the new code.