function animate(obj, target, callback) {
    clearTimeout(obj.time);
    obj.time = setInterval(function () {
        if (obj.offsetLeft == target) {
            clearTimeout(obj.time);
            if (callback) {
                callback();
            }
        } else {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}