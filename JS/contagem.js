

        function verificar() {

            var numero = document.getElementById("numero");
            var res = document.getElementById("res");
            var num = Number(numero.value);
            var ano = num % 4
        
            
            if(ano == 0 ){
        
                
                res.innerHTML=" É um ano bissexto";
                }else{
                    res.innerHTML=" Não é um ano bissexto"
                }
        
            }
