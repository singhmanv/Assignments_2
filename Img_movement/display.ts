class playGround
{
    private static top:number ;
    private static bottom:number;
    private static left:number;
    private static right:number;

    constructor(top:number,bottom:number,left:number,right:number)
    {
        playGround.top = top;
        playGround.bottom = bottom;
        playGround.left = left;
        playGround.right = right;
    }

    OnPressLeft(currentPos : number): number 
    {
        if (currentPos - 10 > playGround.left)
            return currentPos - 10;
        else 
            return -1;
    }

    OnPressRight(currentPos : number): number 
    {   
        if (currentPos + 10 < playGround.right)
        return currentPos + 10;
    else 
        return -1;
    }

    OnPressUp(currentPos : number): number 
    {
        if (currentPos - 10 > playGround.top)
            return currentPos - 10;
        else 
            return -1;
    }

    OnPressDown(currentPos : number) : number 
    {
        if (currentPos + 10 < playGround.bottom)
            return currentPos + 10;
        else 
            return -1;
    }
};

let player1 : playGround;

function instantiate()
{
    player1 = new playGround(parseInt(document.getElementById("image").style.top),window.outerWidth,parseInt(document.getElementById("image").style.left),window.outerHeight);
}

function handler(direction: string)
{
    if(direction == 'Down')
    {
        let newpos : number = player1.OnPressDown(parseInt(document.getElementById("image").style.top));
        if (newpos == -1)
        {
            alert("Down Reached.");
        }
        else
        {
            document.getElementById("image").style.top = newpos + "px";
        }
    }
    else if (direction == 'Up')
    {
        let newpos : number = player1.OnPressUp(parseInt(document.getElementById("image").style.top)) ;
        if (newpos == -1)
        {
            alert("top Reached.");
        }
        else
        {
            document.getElementById("image").style.top = newpos + "px";
        }
    }
    else if (direction == 'Left')
    {
        let newpos : number = player1.OnPressLeft(parseInt(document.getElementById("image").style.left)) ;
        if (newpos == -1)
        {
            alert("Left Reached.");
        }
        else
        {
            document.getElementById("image").style.left = newpos + "px";
        }
    }
    else if (direction == 'Right')
    {
        let newpos : number = player1.OnPressRight(parseInt(document.getElementById("image").style.left)) ;
        if (newpos == -1)
        {
            alert("Right Reached.");
        }
        else
        {
            document.getElementById("image").style.left = newpos + "px";
        }
    }
}