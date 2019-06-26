class Vec4 {

    /**
     * Constructor.
     * @param {float} x 
     * @param {float} y 
     * @param {float} z 
     * @param {float} w
     */
    constructor(aX, aY, aZ, aW) {
        this.position = { x: aX, y: aY, z: aZ, w: aW}
    }

    /**
     * Return the length of Vec4.
     * @returns {float} 
     */
    length() {
        return Math.sqrt(this.position.x * this.position.x
            + this.position.y * this.position.y
            + this.position.z * this.position.z 
            + this.position.w * this.position.w);
    }

    /**
     * Create zero Vec4.
     */
    zero() {
        this.position = { x: 0, y: 0, z: 0, w: 0 }
    }

    /**
     * Retrun normalized Vec4.
     * @returns {Vec4}
     */
    normalize() {
        if (this.length() == 0) { return 0; }
        return Vec3(this.x / this.length(),
            this.y / this.length(),
            this.z / this.length(), 
            this.w / this.length())
    }

    add(vec)
    {
        this.position.x += vec.position.x;
        this.position.y += vec.position.y;
        this.position.z += vec.position.z;
        this.position.w += vec.position.w;
    }

    sub(vec)
    {
        this.position.x -= vec.position.x;
        this.position.y -= vec.position.y;
        this.position.z -= vec.position.z;
        this.position.w -= vec.position.w;
    }

}


class Vec3 {

    /**
     * Constructor.
     * @param {float} x 
     * @param {float} y 
     * @param {float} z 
     */
    constructor(aX, aY, aZ) {
        this.position = { x: aX, y: aY, z: aZ }
    }

    /**
     * Return the length of Vec3.
     * @returns {float} 
     */
    length() {
        return Math.sqrt(this.position.x * this.position.x
            + this.position.y * this.position.y
            + this.position.z * this.position.z);
    }

    /**
     * Create zero Vec3.
     */
    zero() {
        this.position = { x: 0, y: 0, z: 0 }
    }

    /**
     * Retrun normalized Vec3.
     * @returns {Vec3}
     */
    normalize() {
        if (this.length() == 0) { return 0; }
        return Vec3(this.x / this.length(),
            this.y / this.length(),
            this.z / this.length())
    }

    /**
     * 
     * @param {float} thetaX
     * @param {float} thetaY
     * @param {float} thetaZ
     * @param {Vec3} center 
     */
    rotate(thetaX, thetaY, thetaZ, center=Vec3(0,0,0)) 
    {
        let tX = this.x - center.x;
        let tY = this.y - center.y;
        let tZ = this.z - center.z;

        let rotateMatX = Mat4.zero();
        rotateMatX.set(0, 0, 1);
        rotateMatX.set(1, 1, Math.cos(thetaX));
        rotateMatX.set(1, 2, -Math.sin(thetaX));
        rotateMatX.set(2, 1, Math.sin(thetaX));
        rotateMatX.set(2, 2, Math.cos(thetaX));

        let rotateMatY = Mat4.zero();
        rotateMatX.set(0, 0, 1);
        rotateMatX.set(1, 1, Math.cos(thetaX));
        rotateMatX.set(1, 2, -Math.sin(thetaX));
        rotateMatX.set(2, 1, Math.sin(thetaX));
        rotateMatX.set(2, 2, Math.cos(thetaX));

        let rotateMatZ = Mat4.zero();
        rotateMatX.set(0, 0, 1);
        rotateMatX.set(1, 1, Math.cos(thetaX));
        rotateMatX.set(1, 2, -Math.sin(thetaX));
        rotateMatX.set(2, 1, Math.sin(thetaX));
        rotateMatX.set(2, 2, Math.cos(thetaX));

    //    this.position = {
    //        x: tX*Math.cos(theta) - tY*Math.sin(theta) + center.x,
    //        y: tX*Math.sin(theta) + tY*Math.cos(theta) + center.x
    //    };
    }

    add(vec)
    {
        this.position.x += vec.position.x;
        this.position.y += vec.position.y;
        this.position.z += vec.position.z;
    }

    sub(vec)
    {
        this.position.x -= vec.position.x;
        this.position.y -= vec.position.y;
        this.position.z -= vec.position.z;
    }

}

class Vec2 {

    /**
     * Constructor.
     * @param {float} x 
     * @param {float} y 
     */
    constructor(aX, aY) {
        this.position = { x: aX, y: aY }
    }

    /**
     * Return the length of Vec2.
     * @returns {float} 
     */
    length()
    {
        return Math.sqrt(this.position.x * this.position.x
            + this.position.y * this.position.y);
    }

    /**
     * Create zero Vec2.
     */
    zero() 
    {
        this.position = { x: 0, y: 0 }
    }

    /**
     * Retrun normalized Vec2.
     * @returns {Vec2}
     */
    normalize() 
    {
        if (this.length() == 0) { return 0; }
        return Vec3(this.x / this.length(),
            this.y / this.length())
    }

    /**
     * 
     * @param {float} theta 
     * @param {Vec2} center 
     */
    rotate(theta, center=Vec2(0,0)) 
    {
        let tX = this.x - center.x;
        let tY = this.y - center.y;
        this.position = {
            x: tX*Math.cos(theta) - tY*Math.sin(theta) + center.x,
            y: tX*Math.sin(theta) + tY*Math.cos(theta) + center.x
        };
    }

    add(vec)
    {
        this.position.x += vec.position.x;
        this.position.y += vec.position.y;
    }

    sub(vec)
    {
        this.position.x -= vec.position.x;
        this.position.y -= vec.position.y;
    }

}

class Mat4
{
    identity()
    {
        this.value = new Float32Array(4, 4);
        this.value[0][0] = 1; this.value[0][1] = 0; this.value[0][2] = 0; this.value[0][3] = 0;
        this.value[1][0] = 0; this.value[1][1] = 1; this.value[1][2] = 0; this.value[1][3] = 0;
        this.value[2][0] = 0; this.value[2][1] = 0; this.value[2][2] = 1; this.value[2][3] = 0;
        this.value[3][0] = 0; this.value[3][1] = 0; this.value[3][2] = 0; this.value[3][3] = 1;
        return this.value;
    }

    zero()
    {
        this.value = new Float32Array(4, 4);
        this.value[0][0] = 0; this.value[0][1] = 0; this.value[0][2] = 0; this.value[0][3] = 0;
        this.value[1][0] = 0; this.value[1][1] = 0; this.value[1][2] = 0; this.value[1][3] = 0;
        this.value[2][0] = 0; this.value[2][1] = 0; this.value[2][2] = 0; this.value[2][3] = 0;
        this.value[3][0] = 0; this.value[3][1] = 0; this.value[3][2] = 0; this.value[3][3] = 1;
        return this.value;
    }

    set(x, y, v)
    {
        if (x < 0 || x > 3) {return;}
        if (y < 0 || y > 3) {return;}
        this.value[x][y] = v;
    }

    add(mat)
    {
        for(i = 0; i < 4; i++)
        {
            for(j = 0; j < 4; j++)
            {
                this.value[i][j] += mat[i][j];
            }
        }
        return this.value;
    }

    sub(mat)
    {
        for(i = 0; i < 4; i++)
        {
            for(j = 0; j < 4; j++)
            {
                this.value[i][j] -= mat[i][j];
            }
        }
        return this.value;
    }

    //det()
    //{
        //@TODO minus 
        //Sarrus rule
        /*
        return this.value[0][0] * (this.value[1][1] * this.value[2][2] * this.value[3][3]
                + this.value[1][2] * this.value[2][3] * this.value[3][1]
                + this.value[1][3] * this.value[2][1] * this.value[3][2])            
            - this.value[0][1] * (this.value[0][1] * this.value[2][2] * this.value[3][3]
                + this.value[0][2] * this.value[2][3] * this.value[3][1]
                + this.value[0][3] * this.value[2][1] * this.value[3][2])
            + this.value[0][2] * (this.value[0][1] * this.value[1][2] * this.value[3][3]
                + this.value[0][2] * this.value[1][3] * this.value[3][1]
                + this.value[0][3] * this.value[1][1] * this.value[3][2])
            - this.value[0][2] * (this.value[0][1] * this.value[1][2] * this.value[2][3]
                + this.value[0][2] * this.value[1][3] * this.value[2][1]
                + this.value[0][3] * this.value[1][1] * this.value[2][2]);
        */
    //}

    trace()
    {
        result = 0;
        for(i=0; i < 4; i++)
        {
            result += this.value[i][i];
        }
        return result;
    }

}

class Mat3
{
    identity()
    {
        this.value = new Float32Array(4, 4);
        this.value[0][0] = 1; this.value[0][1] = 0; this.value[0][2] = 0; 
        this.value[1][0] = 0; this.value[1][1] = 1; this.value[1][2] = 0; 
        this.value[2][0] = 0; this.value[2][1] = 0; this.value[2][2] = 1; 
        return this.value;
    }

    zero()
    {
        this.value = new Float32Array(4, 4);
        this.value[0][0] = 0; this.value[0][1] = 0; this.value[0][2] = 0; 
        this.value[1][0] = 0; this.value[1][1] = 0; this.value[1][2] = 0; 
        this.value[2][0] = 0; this.value[2][1] = 0; this.value[2][2] = 0; 
        return this.value;
    }

    set(x, y, v)
    {
        if (x < 0 || x > 2) {return;}
        if (y < 0 || y > 2) {return;}
        this.value[x][y] = v;
    }

    add(mat)
    {
        for(i = 0; i < 3; i++)
        {
            for(j = 0; j < 3; j++)
            {
                this.value[i][j] += mat[i][j];
            }
        }
        return this.value;
    }

    sub(mat)
    {
        for(i = 0; i < 3; i++)
        {
            for(j = 0; j < 3; j++)
            {
                this.value[i][j] -= mat[i][j];
            }
        }
        return this.value;
    }

    det()
    {
        //Sarrus rule
        return this.value[0][0] * this.value[1][1] * this.value[2][2]
            + this.value[0][1] * this.value[1][2] * this.value[2][0]
            + this.value[0][2] * this.value[1][0] * this.value[2][1];
    }

    trace()
    {
        result = 0;
        for(i=0; i < 3; i++)
        {
            result += this.value[i][i];
        }
        return result;
    }
}

class Qtn
{
    constructor(aX, aY, aZ, aW)
    {
        this.position = {
            x: aX, y: aY, z: aZ, w: aW
        }
    }

    inverse()
    {
        let inv = new Qtn(-this.x, -this.y, -this.z, this.w);
    }

}

class MyMathLib
{

    static diffVec(src, dst)
    {
        if(src instanceof Vec3 && dst instanceof Vec3)
        {
            return Vec3(dst.position.x - src.position.x, dst.position.y - src.position.y, dst.position.z - src.position.z);
        } else if (src instanceof Vec2 && dst instanceof Vec2)
        {
            return Vec3(dst.position.x - src.position.x, dst.y - src.position.y);
        }
        console.log("src and dst types are unmatched, or not [Vec2 or Vec3]")
        return NaN;
    }

    static distance(vec1, vec2)
    {
        return this.diffVec(vec1, vec2).length();
    }

    static dot(vec1, vec2)
    {
        if(vec1 instanceof Vec3 && vec2 instanceof Vec3)
        {
            return vec1.position.x*vec2.position.x
             + vec1.position.y*vec2.position.y + vec1.position.z*vec2.position.z;
        } else if (vec1 instanceof Vec2 && vec2 instanceof Vec2)
        {
            return vec1.position.x*vec2.position.x
             + vec1.position.y*vec2.position.y;
        }
        console.log("src and dst types are unmatched, or not [Vec2 or Vec3]")
        return NaN;
    }

    static cross(vec1, vec2)
    {
        if(vec1 instanceof Vec3 && vec2 instanceof Vec3)
        {
            return new Vec3(vec1.position.y*vec2.position.z - vec1.position.z*vec2.position.y, 
                vec1.position.z*vec2.position.x + vec1.position.x*vec2.position.z, 
                vec1.position.x*vec2.position.y - vec1.position.y*vec2.position.x);
        } else if (vec1 instanceof Vec2 && vec2 instanceof Vec2)
        {
            return vec1.position.x*vec2.position.y - vec1.position.y*vec2.position.x;
        }
        console.log("src and dst types are unmatched, or not [Vec2 or Vec3]")
        return NaN;
    }

    static multiply(mat1, mat2)
    {
        if (mat1 instanceof Mat3 && mat2 instanceof Mat3)
        {
            let result = Mat3.zero();
            for (i = 0; i < 3; i++) 
            {
                for (j = 0; j < 3; j++)
                {
                    for (k = 0; k < 3; k++)
                    {
                        result[i][j] += mat1.value[i][k]*mat2.value[k][j];
                    }
                }
            }
            return result
        } else if (mat1 instanceof Mat4 && mat2 instanceof Mat4)
        {
            let result = Mat4.zero();
            for (i = 0; i < 4; i++) 
            {
                for (j = 0; j < 4; j++)
                {
                    for (k = 0; k < 4; k++)
                    {
                        result[i][j] += mat1.value[i][k]*mat2.value[k][j];
                    }
                }
            }
            return result
        } else if (mat1 instanceof Mat3 && mat2 instanceof Vec3) 
        {
            return new Vec3(
                mat1.value[0][0]*mat2.position.x 
                + mat1.value[0][1]*mat2.position.y 
                + mat1.value[0][2]*mat2.position.z, 
 
                mat1.value[1][0]*mat2.position.x 
                + mat1.value[1][1]*mat2.position.y 
                + mat1.value[1][2]*mat2.position.z, 
 
                mat1.value[2][0]*mat2.position.x 
                + mat1.value[2][1]*mat2.position.y 
                + mat1.value[2][2]*mat2.position.z
            );
        }  else if (mat1 instanceof Vec3 && mat2 instanceof Mat3) 
        {
            return new Vec3(
                mat2.value[0][0]*mat1.position.x 
                + mat2.value[1][0]*mat1.position.y 
                + mat2.value[2][0]*mat1.position.z, 
 
                mat2.value[0][1]*mat1.position.x 
                + mat2.value[1][1]*mat1.position.y 
                + mat2.value[2][1]*mat1.position.z, 
 
                mat2.value[0][2]*mat1.position.x 
                + mat2.value[1][2]*mat1.position.y 
                + mat2.value[2][2]*mat1.position.z
            );
        } else if (mat1 instanceof Mat4 && mat2 instanceof Vec4) 
        {
            return new Vec4(
                mat1.value[0][0]*mat2.position.x 
                + mat1.value[0][1]*mat2.position.y 
                + mat1.value[0][2]*mat2.position.z
                + mat1.value[0][3]*mat2.position.w, 
 
                mat1.value[1][0]*mat2.position.x 
                + mat1.value[1][1]*mat2.position.y 
                + mat1.value[1][2]*mat2.position.z
                + mat1.value[1][3]*mat2.position.w, 
 
                mat1.value[2][0]*mat2.position.x 
                + mat1.value[2][1]*mat2.position.y 
                + mat1.value[2][2]*mat2.position.z
                + mat1.value[2][3]*mat2.position.w,

                mat1.value[3][0]*mat2.position.x 
                + mat1.value[3][1]*mat2.position.y 
                + mat1.value[3][2]*mat2.position.z
                + mat1.value[3][3]*mat2.position.w
            );
        }  else if (mat1 instanceof Vec4 && mat2 instanceof Mat4) 
        {
            return new Vec4(
                mat2.value[0][0]*mat1.position.x 
                + mat2.value[1][0]*mat1.position.y 
                + mat2.value[2][0]*mat1.position.z
                + mat2.value[3][0]*mat1.position.w, 
 
                mat2.value[0][1]*mat1.position.x 
                + mat2.value[1][1]*mat1.position.y 
                + mat2.value[2][1]*mat1.position.z
                + mat2.value[3][1]*mat1.position.w, 
 
                mat2.value[0][2]*mat1.position.x 
                + mat2.value[1][2]*mat1.position.y 
                + mat2.value[2][2]*mat1.position.z
                + mat2.value[3][2]*mat1.position.w,

                mat2.value[0][3]*mat1.position.x 
                + mat2.value[1][3]*mat1.position.y 
                + mat2.value[2][3]*mat1.position.z
                + mat2.value[3][3]*mat1.position.w
            );
        } 
        console.log("warn: parameter type in invalid on multiply");

    }
}