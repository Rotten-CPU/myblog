// <canvas  id="mineCanvas" style="position:fixed;left:0;top:0;z-index:99999999;pointer-events:none;"></canvas>
/*
 * 鼠标点击特效，canvas点击效果
 * 原文地址：https://www.iowen.cn/mouse-click-effect-canvas-click-effect
 */
const cnv = document.getElementById('mineCanvas');
if(cnv){
    let ctx = cnv.getContext('2d');

    // 基础配置
    let count = 20;//圆点数量
    let innerRadius = 20;
    let outterRadius = 80;
    let moreOutterRadius = 120;
    let easing = 0.05;
    let mcolor = [
        'rgba(244,64,51,.6)',
        'rgba(255,235,59,.6)',
        'rgba(244,3,232,.6)'
    ]

    // 窗口变化重置 canvas 大小
    window.onresize=function(){resize();};
    function resize() {
        cnv.width = window.innerWidth;
        cnv.height = window.innerHeight;
    }

    window.onload = function () {
        // 初始化宽高
        resize();
        let mouse = new Mouse();
        mouse.getMousePosition(document);
        document.addEventListener('click', function(e){
            let balls = getEnoughBall(count, mouse.x, mouse.y);
            let circle = new Ball(mouse.x, mouse.y, innerRadius, 'rgba(244,64,51,.6)');
            var opacticy = 0.6;
            //排除一些元素
            "TEXTAREA" !== e.target.nodeName && "INPUT" !== e.target.nodeName && "A" !== e.target.nodeName && "I" !== e.target.nodeName && "IMG" !== e.target.nodeName
            && (function animation() {
                requestAnimationFrame(animation);
                ctx.clearRect(0, 0, cnv.width, cnv.height);
                balls.forEach(item => {
                    item.draw('fill');
                    // 缓动动画
                    item.vx = (item.dx - item.x) * easing;
                    item.vy = (item.dy - item.y) * easing;
                    item.x += item.vx;
                    item.y += item.vy;
                    item.sx += -item.sx * easing;
                    item.sy += -item.sy * easing;
                })

                circle.draw('stroke');
                circle.radius += (outterRadius - circle.radius) * easing;
                opacticy = opacticy - 0.6 * easing;
                circle.color = `rgba(244, 67, 54, ${opacticy})`
            })()
        }, false)
    }

    function getEnoughBall(num, mouseX, mouseY) {
        var balls = [];
        for (let i = 0; i < num; i++) {
            var ball = new Ball(0, 0, Math.random() * (20 - 5 + 1) + 5, mcolor[parseInt(Math.random() * 3)]);//随机初始大小
            ball.x = mouseX + Math.random() * innerRadius - Math.random() * innerRadius;
            ball.y = mouseY + Math.random() * innerRadius - Math.random() * innerRadius;

            // 计算最终位置
            var x = mouseX - ball.x;
            var y = mouseY - ball.y;
            var scale = Math.abs(x / y);
            ball.dx = (x < 0 ? 1 : -1) * moreOutterRadius / Math.sqrt(scale * scale + 1) * Math.random() * scale + mouseX;
            ball.dy = (y < 0 ? 1 : -1) * moreOutterRadius / Math.sqrt(scale * scale + 1) * Math.random() + mouseY;
            balls.push(ball);
        }
        return balls;
    }

    // ball class
    class Ball {
        constructor(x, y, radius, color) {
            this.x = x || 0;
            this.y = y || 0;
            this.vx = 0;
            this.vy = 0;
            this.sx = 1;
            this.sy = 1;
            this.radius = radius || 10;
            this.color = color || 'black';
        }
        draw(type) {
            if (['fill', 'stroke'].indexOf(type) == -1) {
                throw ('ball.draw need a right type');
            }
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.scale(this.sx, this.sy);
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            ctx.arc(0, 0, this.radius, 0, 360 * Math.PI / 180);
            ctx.closePath();
            type === 'fill' ? ctx.fill() : ctx.stroke();
            ctx.restore();
        }
    }

    // mouse class
    class Mouse {
        constructor() {
            this.x = 0;
            this.y = 0;
        }
        getMousePosition(c) {
            c.addEventListener('click', (e) => {
                this.x = e.clientX - cnv.offsetLeft;
                this.y = e.clientY - cnv.offsetTop;
            }, false)
        }
    }
}