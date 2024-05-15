"use client"
import { useState, useEffect } from 'react';
import {Trash2} from "lucide-react";
import {PencilLine, Search } from "lucide-react";
import {FolderPlus} from "lucide-react";
import { FolderKanban } from 'lucide-react';
<<<<<<< HEAD
=======
import Dados from '../ui/dadosEmp.json';
import DadosEqp from '../ui/dadosEqp.json';
import DadosFun from '../ui/dadosFun.json';
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
import axios from 'axios';

const Emprestimo = () => {

	const [emprestimos, setEmprestimos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
<<<<<<< HEAD
	const [itemsPerPage] = useState(7);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredEmprestimos, setFilteredEmprestimos] = useState([]);
	const [selectedEmprestimo, setSelectedEmprestimo] = useState(null);
	
=======
	const [itemsPerPage] = useState(6);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredEmprestimos, setFilteredEmprestimos] = useState([]);
	const [selectedEmprestimo, setSelectedEmprestimo] = useState(null);

	localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IndhbHRlckBlbXBsb3llci5jb20uYnIiLCJyb2xlIjoiR2VyZW50ZSIsIm5iZiI6MTcxMjg2NTM5MSwiZXhwIjoxNzEyODk0MTkxLCJpYXQiOjE3MTI4NjUzOTF9.pqmGGWGakn3uV7h-L2G7YncMY2O8h1WZIvm31KXcMlE');
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
	const token = typeof window !== 'undefined' ? window.localStorage.getItem('token') : null;

	const data_registro = new Date().toISOString().split('T')[0];

<<<<<<< HEAD
	const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
	const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);

	const [usuarioId, setUsuarioId] = useState('');
	const [equipamentosId, setEquipamentosId] = useState(0);

	

	const handleSubmitAdd = async (event) => {
        event.preventDefault();
        try {
			const response = await axios.post(`https://hd-support-api.azurewebsites.net/api/Emprestimos/Registro-Emprestimo?idPatrimonio=${equipamentosId}&email=${usuarioId}`,  {
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					}
				}
			);
			
			console.log('Equipamento adicionado com sucesso:', response.data);
		} catch (error) { 
			console.error('Erro ao adicionar equipamento:', error); 
		}
    };
=======
	const [newEmprestimo, setNewEmprestimo] = useState({
        email_funcionario:"",
		id_equipamento:"",
		data_registro
    });
    const [editingEmprestimo, setEditingEmprestimo] = useState({
		email_funcionario:"",
		id_equipamento:""
	});

	const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
	const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);


	

	const handleInputChangeAdd = (event) => {
		const { name, value } = event.target;
		setNewEmprestimo({ ...newEmprestimo, [name]: value });
	  };
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
	const handleInputChangeEdit = (event) => {
		const { name, value } = event.target;
		setEditingEmprestimo({ ...editingEmprestimo, [name]: value });
	  };

	  const handleSubmit = (event) => {
        event.preventDefault();
        const updatedEmprestimos = [...emprestimos, newEmprestimo];
        setEmprestimos(updatedEmprestimos);
        closeModalAdd();
    };
	
	const handleOpenEditModal = (emprestimo) => {
		setEditingEmprestimo(emprestimo);
		setIsOpenEdit(true);
	};

	const handleEditEmprestimo = (updatedEmprestimo) => {
		const updatedEmprestimos = emprestimos.map(equipamento => {
			if (equipamento.id === updatedEquipamento.id) {
				return updatedEquipamento;
			}
			return equipamento;
		});
		setEmprestimos(updatedEmprestimos);
		closeModalEdit();
	};

	const fetchData = async (token: string | null) => { // Definindo explicitamente o tipo do parâmetro token
		try {
			if(token) {
<<<<<<< HEAD
			const response = await axios.get('https://hd-support-api.azurewebsites.net/api/Emprestimos/Lista-Emprestimos', {
=======
			const response = await axios.get('', {
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data; // Retorne os dados da resposta
			} else {
			throw new Error('Token não está presente no localStorage');
			}
		} catch (error) {
			console.error('Erro ao buscar dados da API:', error);
			throw error; // Se ocorrer um erro, lance-o para que possa ser tratado em outro lugar
		}
	};
<<<<<<< HEAD
	const statusEquipamento = [
		"Listar Por Status",
		"Disponivel",
		"Ocupado",
		"Danificado",
		"Em Reparo"
	]
	const handleDeleteEmprestimo = async (id) => {
		const updatedEmprestimos = emprestimos.filter(emprestimo => emprestimo.id !== id);
		setEmprestimos(updatedEmprestimos);
		closeModalComfirmDel();
		try {
			console.log(token);
			const response = await axios.post(`https://hd-support-api.azurewebsites.net/api/Emprestimos/Excluir-Emprestimo/${id}`, {},{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(`Emprestimo Deletado com sucesso: ${id}`);
		} catch (error) { 
			console.error('Erro ao Deletar Emprestimo:', error); 
		}
=======

	const handleDeleteEmprestimo = (id) => {
		const updatedEmprestimos = emprestimos.filter(emprestimo => emprestimo.id !== id);
		setEmprestimos(updatedEmprestimos);
		closeModalComfirmDel();
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
	};

	{/*Abrir Adicionar*/}
	const [isOpenAdd, setIsOpenAdd] = useState(false);

	const openModalAdd = () => {
		setIsOpenAdd(true);
	};

	const closeModalAdd = () => {
		setIsOpenAdd(false);
	};

	{/*Abrir Edit*/}
	const [isOpenEdit, setIsOpenEdit] = useState(false);

	const openModalEdit = (emprestimo) => {
		setSelectedEmprestimo(emprestimo);
		setIsOpenEdit(true);
	};

	const closeModalEdit = () => {
		setIsOpenEdit(false);
	};

	{/*Abrir detalhes*/}
	const [isOpenDetail, setIsOpenDetail] = useState(false);

	const openModalDetail = (emprestimo) => {
		setSelectedEmprestimo(emprestimo);
		setIsOpenDetail(true);
	};
	

	const closeModalDetail = () => {
		setIsOpenDetail(false);
	};
	{/*Abrir Comfirmar Excluir*/}
	const [isOpenComfirmDel, setIsOpenComfirmDel] = useState(false);

	const openModalComfirmDel = (emprestimo) => {
		setSelectedEmprestimo(emprestimo);
		setIsOpenComfirmDel(true);
	};

	const closeModalComfirmDel = () => {
		setIsOpenComfirmDel(false);
	};

	useEffect(() => {
<<<<<<< HEAD
		if (token) {
			fetchData(token)
			.then((data) => {
				setEmprestimos(data);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
			});
		} else {
			console.log('Token não está presente no localStorage');
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		const results = emprestimos.filter(emprestimo => {
		  // Função recursiva para verificar se um valor é uma string ou número inteiro
		  const hasStringOrIntegerProperty = value => {
			if (typeof value === "string") {
			  return value.toLowerCase().includes(searchTerm.toLowerCase());
			} else if (typeof value === "number" && Number.isInteger(value)) {
			  return value === parseInt(searchTerm, 10);
			} else if (value && typeof value === "object") {
				return Object.values(value).some(hasStringOrIntegerProperty);
			  }
			return false;
		  };
	  
		  // Verifica se algum valor nas propriedades do objeto ou objetos aninhados corresponde ao searchTerm
		  return Object.values(emprestimo).some(hasStringOrIntegerProperty);
		});
	  
		setFilteredEmprestimos(results);
=======
		setEmprestimos(Dados);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		const results = emprestimos.filter(emprestimos => {
			return Object.values(emprestimos).some(value =>
			  typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
			);
		  });
		  setFilteredEmprestimos(results);
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
	  }, [emprestimos, searchTerm]);
	
	  // Lidando com a alteração no termo de pesquisa
	  const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	  };
	
	  // Paginação
	  const paginate = pageNumber => setCurrentPage(pageNumber);
	  const indexOfLastItem = currentPage * itemsPerPage;
	  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	  const currentItems = filteredEmprestimos.slice(indexOfFirstItem, indexOfLastItem);

	return(
		<div className="flex items-center justify-center w-full h-full">
<<<<<<< HEAD
			<div className="w-[95%] h-[550px] bg-black rounded-[5px] border-2 border-white">
=======
			<div className="w-[95%] h-[500px] bg-black rounded-[5px] border-2 border-white">
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
				<div className="w-full flex items-center justify-between p-[20px] px-[40px] bg-black to-sky-200 rounded-t-md mb-[10px]">
					<div>
						<h1 className="text-[24px] w-[300px] text-white">Gerenciar <b>Emprestimos</b></h1>
					</div>
					<form className="flex items-center justify-center bg-gradient-to-r from-blue-950 to-cyan-950 pr-4 rounded-xl">
						<input
							type="text"
							placeholder="Pesquisar por..."
							value={searchTerm}
							onChange={handleSearchChange}
							className="form-input bg-transparent text-white px-4 py-2 rounded-xl border-none focus:ring-0 w-[400px]"
						/>
						<button type="submit"><Search className='text-blue-50'/></button>
					</form>
					<div className="space-x-2 flex items-center">
						{/*<button className="bg-[#dc3545] px-[10px] py-[8px] rounded-[5px] text-[14px] flex"> <Trash2 className="mr-[5px]"/> Excluir</button>*/}
						<button className="bg-gradient-to-r from-blue-800 to-cyan-500 px-[10px] py-[8px] rounded-[5px] text-[14px] flex" onClick={openModalAdd}> <FolderPlus className="mr-[5px]"/> Adicionar novo Emprestimo</button>
					</div>
				</div>
<<<<<<< HEAD
				<div className='flex flex-col justify-between h-[84%]'>
					<table className="text-slate-100  w-full bg-neutral-900">
=======
				<table className="text-slate-100  w-full bg-neutral-900">
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
					<thead className="h-[45px]">
						<tr className="text-blue-500">
							<th className="" scope="col">Email do Funcionario</th>
							<th className="" scope="col">ID do Equipamento</th>
<<<<<<< HEAD
							<th className="" scope="col">Status do Equipamento</th>
=======
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
							<th className="" scope="col">Data de Inicio</th>
							<th className="" scope="col">Ações</th>
						</tr>
					</thead>
					{/*linha dados do crud*/}
					<tbody className="">
						{currentItems.map((emprestimo, index) => (
							<tr key={index} className="h-[50px] border-y">
<<<<<<< HEAD
								<td className="text-center">{emprestimo.usuario.email}</td> 
								<td className="text-center">{emprestimo.equipamentos.idPatrimonio}</td>
								<td className="text-center">{statusEquipamento[emprestimo.equipamentos.statusEquipamento]}</td>
								<td className="text-center">{emprestimo.equipamentos.dtEmeprestimoInicio}</td>
=======
								<td className="text-center">{emprestimo.email_funcionario}</td> 
								<td className="text-center">{emprestimo.id_equipamento}</td>
								<td className="text-center">{emprestimo.data_registro}</td>
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
								<td className="flex justify-center mt-[10px]">
                                    <button onClick={() => openModalComfirmDel(emprestimo)}><Trash2 className="text-blue-700" /></button>
                                    <button onClick={() => openModalDetail(emprestimo)}><FolderKanban className="text-sky-600 ml-[8px]" /></button>
                                	<button onClick={() => openModalEdit(emprestimo)}><PencilLine className="text-cyan-500 ml-[8px]" /></button>
                                </td>
							</tr>
						))}
					</tbody>
				</table>
<<<<<<< HEAD
				<div className="flex justify-center pb-[15px]">
					{[...Array(Math.ceil(filteredEmprestimos.length / itemsPerPage)).keys()].map((number) => (
					<button key={number} onClick={() => paginate(number + 1)} className={` ${currentPage === number + 1 ? 'text-white' : 'text-neutral-500'} mx-1 px-3 py-1 bg-gray-800 rounded-[8px]`}>{number + 1}</button>
					))}
				</div>
				</div>
				
=======
				<div className="flex justify-center mt-4">
					{[...Array(Math.ceil(filteredEmprestimos.length / itemsPerPage)).keys()].map((number) => (
					<button key={number} onClick={() => paginate(number + 1)} className="mx-1 px-3 py-1 bg-gray-800 text-white rounded-[8px]">{number + 1}</button>
					))}
				</div>
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
			</div>
			<div>
				{isOpenAdd && (
					<div className="fixed inset-0 flex items-center justify-center  bg-opacity-50">
					<div className="bg-neutral-800 p-4 pt-6 px-6 rounded-[8px] w-[400px] ">
						<div className='flex justify-between'> 
							<h1 className='text-white text-[20px]'>Cadastro de Empréstimos</h1>
							<button onClick={closeModalAdd} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-[8px] float-right">x</button>
						</div>
<<<<<<< HEAD
						<form onSubmit={handleSubmitAdd} className='text-white'>
							<div className="mb-4 mt-4">
								<input
									type="text"
									value={usuarioId} onChange={(e) => setUsuarioId(e.target.value)}
=======
						<form onSubmit={handleSubmit} className='text-white'>
							<div className="mb-4 mt-4">
								<input
									type="email"
									value={newEmprestimo.email_funcionario}
									onChange={handleInputChangeAdd}
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
									name="email_funcionario"
									placeholder='Digite o Email do Funcionário'
									className="mt-1 w-full bg-neutral-700 p-1 h-11 rounded-[8px] px-4"
								/>
							</div>
							<div className="mb-4 mt-4">
								<input
									type="number"
<<<<<<< HEAD
									value={equipamentosId} onChange={(e) => setEquipamentosId(parseInt(e.target.value))}
=======
									value={newEmprestimo.id_equipamento}
									onChange={handleInputChangeAdd}
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
									name="id_equipamento"
									placeholder='Digite o ID de Patrimônio'
									className="mt-1 w-full bg-neutral-700 p-1 h-11 rounded-[8px] px-4"
								/>
							</div>
							<div className='flex justify-center'>
								<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-[8px] w-full mt-2">Enviar</button>
							</div>
						</form>
					</div>
				</div>
				)}
    		</div>
			<div>
			{isOpenEdit && editingEmprestimo && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-neutral-800 p-4 pt-6 px-6 rounded-[8px] w-[400px] ">
							<div className='flex justify-between'> 
								<h1 className='text-white text-[20px]'>Editar Empréstimo</h1>
								<button onClick={closeModalEdit} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-[8px] float-right">x</button>
							</div>
							<form onSubmit={handleEditEmprestimo} className='text-white'>
							<div className="mb-4 mt-4">
								<input
								type="text"
								value={editingEmprestimo.email_funcionario}
								onChange={handleInputChangeEdit}
								name="email_funcionario"
								placeholder='Digite o email do funcionario'
								className="mt-1 w-full bg-neutral-700 p-1 h-11 rounded-[8px] px-4"
								/>
							</div>
							<div className="mb-4 mt-4">
								<input
								type="number"
								value={editingEmprestimo.id_equipamento}
								onChange={handleInputChangeEdit}
								name="id_equipamento"
								placeholder='Digite o ID de patrimônio'
								className="mt-1 w-full bg-neutral-700 p-1 h-11 rounded-[8px] px-4"
								/>
							</div>
								<div className='flex justify-center'>
									<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-[8px] w-full mt-2">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				)}
    		</div>
			<div>
    {isOpenDetail && selectedEmprestimo && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="p-4 px-6 rounded-[8px] w-[600px] bg-neutral-800 ">
                <div className='flex justify-between mb-5 items-center'>
                    <h1 className='text-white text-[21px]'>Detalhes Equipamento</h1>
                    <button onClick={closeModalDetail} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-[8px] float-right">x</button>
                </div>
                <table className='w-full'>
                    <tbody>
						<tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Nome do Funcionário</th>
<<<<<<< HEAD
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.usuario.nome}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Email do Funcionário</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.usuario.email}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">ID de Patrimônio do Equipamento</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.equipamentos.idPatrimonio}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Status do Equipamento</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{statusEquipamento[selectedEmprestimo.equipamentos.statusEquipamento]}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Inicio do Emprestimo</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.equipamentos.dtEmeprestimoInicio}</td>
=======
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">
                                {DadosFun.find(funcionario => funcionario.email === selectedEmprestimo.email_funcionario)?.nome || "Nome não encontrado"}
                            </td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Email do Funcionário</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.email_funcionario}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">ID de Patrimônio do Equipamento</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.id_equipamento}</td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Status do Equipamento</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">
                                {DadosEqp.find(equipamento => equipamento.idPatrimonio === selectedEmprestimo.id_equipamento)?.statusEquipamento || "Status não encontrado"}
                            </td>
                        </tr>
                        <tr>
                            <th className="text-center mt-5 border-b border-neutral-700 py-3">Inicio do Emprestimo</th>
                            <td className="text-center mb-5 border-b border-neutral-700 py-3">{selectedEmprestimo.data_registro}</td>
>>>>>>> 0e6aebe6ad8896d35bc0793fd6ae949c6a77881f
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )}
</div>
			<div>
				{isOpenComfirmDel && selectedEmprestimo && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-neutral-800 p-8 rounded-[8px]">
						<h2 className="text-lg font-semibold mb-4 text-white">Tem Certeza que deseja Excluir o Emprestimo?</h2>
						<div className='flex justify-center px-[20px]'>
							<button onClick={closeModalComfirmDel} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-[8px]">Cancelar</button>
							<button onClick={() => handleDeleteEmprestimo(selectedEmprestimo.id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-[8px] ml-6">Confirmar</button>
						</div>
					</div>
					</div>
				)}
    		</div>
		</div>
	);
};


export default Emprestimo;