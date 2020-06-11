<?php
    
  class ProfessorHorista extends Professor {
    
    public function ProfessorHorista($idade, $nome, $salario,$matricula,$hora) {
        $this->setNome($idade);
        $this->setIdade($nome);
        $this->setPeriodo($salario);
        $this->setPeriodo($matricula);
        $this->setPeriodo($hora);
      }
      public function ProfessorHorista() {
        echo "ProfessorHorista\n";
      }


      public function gethora()
      {
          return $this->hora;
      }
      public function sethora($hora)
      {
          $this->hora = $hora;
      }
      public function CalculaSalario()
      {
          return $this->$salario * $hora;
      }
      public function CalculaSalario()
      {
          return $this->$salario * $hora;
      }
  }


  class ProfessorFixo extends Professor {
    
    public function ProfessorFixo($idade, $nome, $salario,$matricula) {
        $this->setNome($idade);
        $this->setIdade($nome);
        $this->setPeriodo($salario);
        $this->setPeriodo($matricula);
      }

      public function ProfessorFixo() {
        echo "ProfessorFixo\n";
      }
      public function CalculaSalario()
      {
          return $this->$salario * 40;
      }
  }
  
class Professor {
  
   private $idade;
   private $nome;
   private $salario;
   private $matricula;
  
   public function Professor($idade, $nome, $salario,$matricula) {
    $this->setNome($idade);
    $this->setIdade($nome);
    $this->setPeriodo($salario);
    $this->setPeriodo($matricula);
  }
   public function getMatricula()
   {
       return $this->matricula;
   }
   public function setMatricula($matricula)
   {
       $this->matricula = $matricula;
   }

   public function getIdade()
   {
       return $this->idade;
   }
   public function setIdade($idade)
   {
       $this->idade = $idade;
   }
   public function getNome()
   {
       return $this->nome;
   }
   public function setNome($nome)
   {
       $this->nome = $nome;
   }
   public function getSalario()
   {
       return $this->preco;
   }
   public function setSalario($salario)
   {
       $this->salario = $salario;
   }
}

class Aluno {
  
    private $login;
    private $senha;

   
    public function Professor($login, $senha) {
     $this->setNome($login);
     $this->setIdade($senha);

   }
    
    public function getlogin()
    {
        return $this->login;
    }
    public function setNome($login)
    {
        $this->login = $login;
    }
    public function getsenha()
    {
        return $this->senha;
    }
    public function setsenha($senha)
    {
        $this->senha = $senha;
    }

    public function ValidarSenha($parametro)
    {
        if($this->senha == $parametro){
            echo "Senha Correta\n";
        }else {
            echo "Senha Errada\n";
        }
        
    }
 }
 