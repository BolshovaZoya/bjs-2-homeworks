function parseCount(value) {
    let floatValue = Number.parseFloat(value);
    if (isNaN(floatValue)) {
        throw new Error("Невалидное значение");
    }
    return floatValue;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        console.log(error);
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        let triangleError = new Error("Треугольник с такими сторонами не существует");
        if ((a + b) < c) {
            throw triangleError;
        } else if ((b + c) < a) {
            throw triangleError;
        } else if ((c + a) < b) {
            throw triangleError;
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        let perimeterTriangle = this.a + this.b + this.c
        return perimeterTriangle
    }
    get area() {
        let p = this.perimeter / 2;
        let areaTriangle =  Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number(areaTriangle.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (Error) {
        return new TriangleError();
    }
}
class TriangleError {

    #error = "Ошибка! Треугольник не существует";

    get perimeter() {
        return this.#error;
    }
    get area() {
        return this.#error;
    }
}
