
class calculator
{
    private operand1:string;
    private operator:string;
    private operand2:string;
    private is_equal_pressed: boolean;

    constructor()
    {
        this.operand1 = "0";
        this.operator = "";
        this.operand2 = "";
        this.is_equal_pressed = false;
    }

    On_decimal_press() : string
    {
        let output: string = "";
        if(this.operator == "")
        {
            if (!this.operand1.includes("."))
            {
                this.operand1 = this.operand1 + ".";
                output = this.operand1;
            }
        }
        else
        {
            if (!this.operand2.includes("."))
            {    
                this.operand2 = this.operand2 + ".";
                output = this.operand1 + this.operator + this.operand2;
            }
        }
        return output;
    }

    On_numeric_press(pressed_num:string): string
    {
        let output: string = "";

        if(this.operand1 == "0" && this.operator == "")
        {
            this.operand1 = "";
            this.operand1 = pressed_num;
            output = this.operand1;
        }
        else if(this.operator == "")
        {
            if(this.is_equal_pressed)
            {
                this.is_equal_pressed = false;
                this.operand1 = "";
            }
            this.operand1 = this.operand1 + pressed_num;
            output = this.operand1;
        }
        else
        {
            this.operand2 = this.operand2 + pressed_num;
            output = this.operand1 + this.operator + this.operand2;
        }

        return output;
    }

    On_Plus_press() : string
    {
        let output: string = "";

        if (this.operator == "")
        {
            if (this.operand1[this.operand1.length - 1] == ".")
            {
                this.operand1[this.operand1.length - 1] == "";
            }
            this.operator = " + ";
            output = this.operand1 + this.operator ;
        }
        else if (this.operator != "" && this.operand2 == "")
        {
            this.operator = " + ";
            output = this.operand1 + this.operator ;
        }
        else
        {
            this.perform_operation();
            this.operator = " + ";
            output = this.operand1 + this.operator ;
        }
        return output;
    }

    On_minus_press() : string
    {
        let output: string = "";

        if (this.operator == "")
        {
            if (this.operand1[this.operand1.length - 1] == ".")
            {
                this.operand1[this.operand1.length - 1] == "";
            }
            this.operator = " - ";
            output = this.operand1 + this.operator ;
        }
        else if (this.operator != "" && this.operand2 == "")
        {
            this.operator = " - ";
            output = this.operand1 + this.operator ;
        }
        else
        {
            this.perform_operation();
            this.operator = " - ";
            output = this.operand1 + this.operator ;
        }
        return output;
    }

    On_multiplication_press() : string
    {
        let output: string = "";

        if (this.operator == "")
        {
            if (this.operand1[this.operand1.length - 1] == ".")
            {
                this.operand1[this.operand1.length - 1] == "";
            }
            this.operator = " * ";
            output = this.operand1 + this.operator ;
        }
        else if (this.operator != "" && this.operand2 == "")
        {
            this.operator = " * ";
            output = this.operand1 + this.operator ;
        }
        else
        {
            this.perform_operation();
            this.operator = " * ";
            output = this.operand1 + this.operator ;
        }
        return output;
    }

    On_division_press() : string
    {
        let output: string = "";

        if (this.operator == "")
        {
            if (this.operand1[this.operand1.length - 1] == ".")
            {
                this.operand1[this.operand1.length - 1] == "";
            }
            this.operator = " / ";
            output = this.operand1 + this.operator ;
        }
        else if (this.operator != "" && this.operand2 == "")
        {
            this.operator = " / ";
            output = this.operand1 + this.operator ;
        }
        else
        {
            this.perform_operation();
            this.operator = " / ";
            output = this.operand1 + this.operator ;
        }
        return output;
    }

    perform_operation()
    {
        let result:number;
        if (this.operator == "")
        {
            return;
        }
        else if (this.operator.trim() == "+")
        {
            result = parseFloat(this.operand1) + parseFloat(this.operand2);
        }
        else if(this.operator.trim() == "-")
        {
            result = parseFloat(this.operand1) - parseFloat(this.operand2);
        }
        else if(this.operator.trim() == "/")
        {
            result = parseFloat(this.operand1) / parseFloat(this.operand2);
        }
        else if(this.operator.trim() == "*")
        {
            result = parseFloat(this.operand1) * parseFloat(this.operand2);
        }
        this.operand1 = result + ""
        this.operand2 = ""
        this.operator = ""
    }

    On_equalto_press() : string
    {
        let output: string = "";
        this.is_equal_pressed = true;
        if(this.operand1 == "0")
        {
            output = "0";
        }
        else if(this.operator != "" && this.operand1 != "0" && this.operand2 == "")
        {
            if (this.operand1[this.operand1.length - 1] == ".")
            {
                this.operand1[this.operand1.length - 1] == "";
            }
            output = this.operand1;
        }
        else if(this.operator != "" && this.operand2 == "")
        {
            output = this.operand1;
        }
        else
        {
            this.perform_operation();
            output = this.operand1;
        }
        return output;
    }

}

let obj:calculator = new calculator();

function validate_expr(event)
{
    let currExp = document.getElementById("expr1").value;
    let pressed_btn_txt = window.event.currentTarget.defaultValue.trim();
    
    if(pressed_btn_txt === ".")
    {
        document.getElementById("expr1").value = obj.On_decimal_press();
    }
    else if(parseInt(pressed_btn_txt) >=0 && parseInt(pressed_btn_txt) <= 9)
    {
        document.getElementById("expr1").value = obj.On_numeric_press(pressed_btn_txt);
    }
    else if(pressed_btn_txt == "+")
    {
        document.getElementById("expr1").value = obj.On_Plus_press();
    }
    else if(pressed_btn_txt == "-")
    {
        document.getElementById("expr1").value = obj.On_minus_press();
    }
    else if(pressed_btn_txt == "*")
    {
        document.getElementById("expr1").value = obj.On_multiplication_press();
    }
    else if(pressed_btn_txt == "/")
    {
        document.getElementById("expr1").value = obj.On_division_press();
    }
    else if(pressed_btn_txt == "=")
    {
        document.getElementById("expr1").value = obj.On_equalto_press();
    }
}
