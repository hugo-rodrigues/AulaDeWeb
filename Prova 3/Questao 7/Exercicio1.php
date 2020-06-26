<?php
    

class SuperHeroi {
  
   private $id;
   private $nome;
   private $poderEspecial;
   private $energia;
   private $forca;
   private $origem;
  
   public function SuperHeroi($id, $nome, $poderEspecial,$energia,$forca,$origem) {
    $this->setNome($id);
    $this->setIdade($nome);
    $this->setPeriodo($poderEspecial);
    $this->setPeriodo($energia);
    $this->setPeriodo($forca);
    $this->setPeriodo($origem);
  }
   public function getId()
   {
       return $this->id;
   }
   public function setId($id)
   {
       $this->id = $id;
   }

   public function getPoderEspecial()
   {
       return $this->poderEspecial;
   }
   public function setPoderEspecial($poderEspecial)
   {
       $this->poderEspecial = $poderEspecial;
   }
   public function getNome()
   {
       return $this->nome;
   }
   public function setNome($nome)
   {
       $this->nome = $nome;
   }
   public function getEnergia()
   {
       return $this->energia;
   }
   public function setEnergia($energia)
   {
       $this->energia = $energia;
   }

   public function getOrigem()
   {
       return $this->origem;
   }
   public function setOrigem($origem)
   {
       $this->origem = $origem;
   }


   public function getForca()
   {
       return $this->forca;
   }
   public function setForca($forca)
   {
       $this->forca = $forca;
   }

   public function aumentarEnergia($energia)
   {
       return $energia = $energia * 119212754;
   }

   public function calcularPoderMedio($energia, $forca)
   {
       return $media =  $energia / $forca;
   }
}

$Hero1 = new SuperHeroi("9","goku","super sayan","5000","9000","Planeta Vegeta");
$Hero2 = new SuperHeroi("8","Harry Potter","Magia","3000","2000","Londres");
$Hero3 = new SuperHeroi("7","Vegeta","Super Sayan","4000","8000","Planeta Vegeta");
$Hero4 = new SuperHeroi("6","Valdemort"," Magia","2000","1000","Londes");


