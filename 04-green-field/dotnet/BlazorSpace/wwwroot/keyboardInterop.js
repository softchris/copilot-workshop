window.keyboardInterop = {
    addKeyDownListener: (dotnetHelper) => {
        window.onkeydown = (event) => {
            
            dotnetHelper.invokeMethodAsync('OnKeyDown', event.key);
        };
    },
    removeKeyDownListener: () => {
        window.onkeydown = null;
    }
};