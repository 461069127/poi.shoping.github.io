(window.addEventListener('load', function () {
    var regtel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd=/^[a-zA-Z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');
    regexp(tel, regtel);
    var msg = document.querySelector('#msg');
    regexp(msg, regmsg);
    var pwd = this.document.querySelector('#pwd');
    regexp(pwd, regpwd);
    var surepwd = this.document.querySelector('#surepwd');
    surepwd.addEventListener('blur',function () {
        if (this.value==pwd.value) {
            this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>格式正确';
        } else {
            this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>两次密码不一样';
        }
    })

    //表单验证
    function regexp(ele,reg) {
        ele.addEventListener('blur', function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>格式正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请从新输入';
            }
        })
    }
    
}))