class Sun{
    constructor(time) {
        this.time = time
    }
    sunRise() {
        if(this.time === 6) {
            alert(`Mặt trời mọc lúc ${this.time} giờ`)
        }
    }
    sunDown() {
        if(this.time === 18) {
            alert(`Mặt trời lặn lúc ${this.time} giờ`)
        }
    }
}

class Bird {
    constructor(time,) {
        this.time = time;
        this.total = 0;
        this.listFlowers = []
    }
    getUp() {
        if(this.time === 5) {
            alert(`Chim thức dậy lúc ${this.time} giờ`)
        }
    }
    goSleep() {
        if(this.time === 19) {
            alert(`Chim đi ngủ lúc ${this.time} giờ`)
        }
    }
    getNectar(flower) {
        if(flower) {
            this.total = ++this.total;
            this.listFlowers.push(flower);
            alert(`Chim hút được mật 1 bông hoa ${flower}`);
            for(let i = 0; i < this.listFlowers.length; i++) {
                if(this.listFlowers[i] === this.listFlowers[i-1]) {
                    alert('Một bông hoa mới được tạo ra')
                }
            }
        }
    }
}
class Flower {
    constructor(time,issuckNectar,color = 'red') {
        this.time = time;
        this.issuckNectar = issuckNectar;
        this.color = color;
    }
    flowings() {
        this.issuckNectar = true;
        const time = (Math.random()*2).toFixed(2);
        if( this.time === 6) {
            alert(`Hoa nở được ${time} giờ`)
        }
    }
    flowersWilt() {
        const timeSecond = (Math.random()*2).toFixed(2);
        if( this.time === 6) {
            alert(`Hoa nở được ${timeSecond} giờ`)
        }
    }
    getColor() {
        const colors = ['đỏ', 'lục', 'lam'];
        let numberRandom = Math.floor(Math.random()*3)
        let color = colors[numberRandom];
        console.log(color);
        this.color = color;
        alert(`Màu của bông hoa là ${color}`)
        
    }

}   
const sun  = new Sun(18);
const bird  = new Bird(5);
const flower  = new Flower(6);
sun.sunRise();
sun.sunDown();
bird.getUp();
flower.flowings();
flower.flowersWilt();
flower.getColor();
bird.getNectar('lục');
bird.getNectar('đỏ');
bird.getNectar('đỏ');
