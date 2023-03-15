class Cliente//construcao de classe Cliente, gets e sets
{
	constructor(pNome, pEndereco)
    {
		this.Nome=pNome;
		this.Endereco=pEndereco;
	}
	get Nome()
    {
		return this.nome;
	}
	set Nome(pNome)
    {
		this.nome=pNome;		
	}
	get Endereco()
    {
		return this.endereco;
	}
	set Endereco(pEndereco)
    {
		this.endereco=pEndereco;
	}
}

class PF extends Cliente//construcao de classe PF, gets e sets
{
	constructor(pNome, pEndereco, pCPF, pDataNascimento)
    {
		super(pNome, pEndereco);
		this.CPF=pCPF;
		this.DataNascimento=pDataNascimento;
	}
	get CPF()
    {
		return this.cpf;
	}
	set CPF(pCPF)
    {
		this.cpf=pCPF;
	}
	get DataNascimento()
    {
		return this.datanascimento;
	}
	set DataNascimento(pDataNascimento){
		this.datanascimento=pDataNascimento;
	}
}

 class PJ extends Cliente//construcao de classe PJ, gets e sets
{
	constructor(pNome, pEndereco, pCNPJ, pRazaoSocial)
    {
		super(pNome, pEndereco);
		this.CNPJ=pCNPJ;
		this.RazaoSocial=pRazaoSocial;
	}
	get CNPJ()
    {
		return this.cnpj;
	}
	set CNPJ(pCNPJ)
    {
		this.cnpj=pCNPJ;
	}
	get RazaoSocial()
    {
		return this.razaosocial;
	}
	set RazaoSocial(pRazaoSocial)
    {
		this.razaosocial=pRazaoSocial;
	}
}

var pessoa_fisica=new PF('Beltior','Rua Farroupilha, 123','01234567890','01021984');//chamada de Pessoa Fisica
console.log(pessoa_fisica);

var pessoa_juridica=new PJ('CHESINIRS','Rua Caxias do Sul','01234567000123','Beltior Chesini CPF');//chamada de Pessoa Juridica
console.log(pessoa_juridica);