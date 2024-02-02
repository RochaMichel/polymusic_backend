import { Router } from "express";
import SessionController from "./app/controllers/SessionController";
import authMiddleware from "./app/middlewares/auth";
//import ProdutoAcabadoController from "./app/controllers/ProdutoAcabadoController";
//import PrecificacaoController from "./app/controllers/PrecificacaoController";
//import EmpresaController from "./app/controllers/EmpresaController";
import UsuarioController from "./app/controllers/UsuarioController";
import ArtistaController from "./app/controllers/ArtistaController";
import PerfilDeAcessoController from "./app/controllers/PerfilDeAcessoController";
import EditoraController from "./app/controllers/EditoraController";
import EtiquetaController from "./app/controllers/EtiquetaController";
import GravadoraController from "./app/controllers/GravadoraController";
import NomesController from "./app/controllers/NomesController";
import TapeController from "./app/controllers/TapeController";
import AgregadoresController from "./app/controllers/AgregadoresController";
import EmailRecoveryController from "./app/controllers/EmailRecoveryController";
import Tipos_de_tapesController from "./app/controllers/Tipos_de_tapesController"
import MusicaController from "./app/controllers/MusicaController";
import LogController from "./app/controllers/logController";
import AcervoMusicalController from "./app/controllers/AcervoMusicalController";
import DetailController from "./app/controllers/DetailController";

const routes = new Router();

//Sem autenticação
routes.get("/", (req, res) => {
  return res.json({
    status: "On-line",
  });
});

//API de log-in.
routes.post("/sessions", SessionController.store);
routes.post("/emailrecovery", EmailRecoveryController.store);
routes.post("/trocarsenha", EmailRecoveryController.post);
routes.post("/confirmaMail", EmailRecoveryController.confirm);

routes.post("/criarUsuario"  , UsuarioController.post);
routes.get("/listaUsuarios"   , UsuarioController.list);
routes.get("/carregarUsuario"  , UsuarioController.get);
routes.put("/alterarUsuario"   , UsuarioController.put);
routes.get("/buscarUsuario"    , UsuarioController.catch);
routes.put("/excluirUsuario", UsuarioController.delete);

routes.post("/criarArtista"  , ArtistaController.post);
routes.get("/listaArtista"   , ArtistaController.list);
routes.get("/carregarArtista"  , ArtistaController.get);
routes.put("/alteraArtista"   , ArtistaController.put);
routes.get("/buscarArtista"    , ArtistaController.catch);
routes.put("/excluirArtista", ArtistaController.delete);

routes.post("/criarEditora"  , EditoraController.post);
routes.get("/listaEditora"   , EditoraController.list);
routes.get("/carregarEditora"  , EditoraController.get);
routes.put("/alteraEditora"   , EditoraController.put);
routes.get("/buscarEditora"    , EditoraController.catch);
routes.put("/excluirEditora", EditoraController.delete);

routes.post("/criarEtiqueta"  , EtiquetaController.post);
routes.get("/listaEtiqueta"   , EtiquetaController.list);
routes.get("/carregarEtiqueta"  , EtiquetaController.get);
routes.put("/alteraEtiqueta"   , EtiquetaController.put);
routes.get("/buscarEtiqueta"    , EtiquetaController.catch);
routes.put("/excluirEtiqueta", EtiquetaController.delete);

routes.post("/criarAgregadores"  , AgregadoresController.post);
routes.get("/listaAgregadores"   , AgregadoresController.list);
routes.get("/carregarAgregadores"  , AgregadoresController.get);
routes.put("/alteraAgregadores"   , AgregadoresController.put);
routes.get("/buscarAgregadores"    , AgregadoresController.catch);
routes.put("/excluirAgregadores", AgregadoresController.delete);

routes.post("/criarGravadora"  , GravadoraController.post);
routes.get("/listaGravadoras"   , GravadoraController.list);
routes.get("/carregarGravadora"  , GravadoraController.get);
routes.put("/alteraGravadora"   , GravadoraController.put);
routes.get("/buscarGravadora"    , GravadoraController.catch);
routes.put("/excluirGravadora", GravadoraController.delete);

routes.post("/criarNomes"  , NomesController.post);
routes.get("/listaNomes"   , NomesController.list);
routes.get("/carregarNomes"  , NomesController.get);
routes.put("/alterarNomes"   , NomesController.put);
routes.get("/buscarNomes"    , NomesController.catch);
routes.put("/excluirNomes", NomesController.delete);
routes.get("/consultarNomes"   , NomesController.lookup);
routes.get("/buscarNomesExato"   , NomesController.busca);

routes.post("/criarTape"  , TapeController.post);
routes.get("/listarTapes"   , TapeController.list);
routes.get("/carregarTape"  , TapeController.get);
routes.put("/alterarTape"   , TapeController.put);
routes.get("/buscarTape"    , TapeController.catch);
routes.get("/buscarTapeExato"    , TapeController.busca);
routes.get("/buscarTapeExato1"    , TapeController.busca2);
routes.get("/buscaTapesNomes"    , TapeController.buscaName);
routes.get("/buscaTapesGrava"    , TapeController.buscaGrava);
routes.get("/buscaTapesEtique"    , TapeController.buscaEtique);
routes.get("/buscaTapesTipo"    , TapeController.buscaTipo);
routes.get("/listaTapesSteam"    , TapeController.listaStream);
routes.get("/listaTapesTotal"    , TapeController.listaTapes);
routes.get("/buscarSuper"    , TapeController.buscaSuper);
routes.get("/consultaEspecificaTape"    , TapeController.consultaTape);
routes.put("/alterarStreamTape"    , TapeController.alterarStream);
routes.put("/excluirTape", TapeController.delete);

routes.post("/criarPerfilDeAcesso"  , PerfilDeAcessoController.post);
routes.get("/listaPerfilDeAcesso"   , PerfilDeAcessoController.list);
routes.get("/carregarPerfilDeAcesso"  , PerfilDeAcessoController.get);
routes.put("/alterarPerfilDeAcesso"   , PerfilDeAcessoController.put);
routes.get("/buscarPerfilDeAcesso"    , PerfilDeAcessoController.catch);
routes.put("/excluirPerfilDeAcesso", PerfilDeAcessoController.delete);

routes.post("/criarLog"  , LogController.post);
routes.get("/listarLog"   , LogController.list);
routes.get("/carregarLog"  , LogController.get);
routes.put("/alterarLog"   , LogController.put);
routes.get("/buscarLog"    , LogController.catch);
routes.put("/excluirLog", LogController.delete);

routes.post("/criarAcervoMusical"  , AcervoMusicalController.post);
routes.get("/listarAcervoMusical"   , AcervoMusicalController.list);
routes.get("/carregarAcervoMusical"  , AcervoMusicalController.get);
routes.put("/alterarAcervoMusical"   , AcervoMusicalController.put);
routes.get("/buscarAcervoMusical"    , AcervoMusicalController.catch);
routes.put("/excluirAcervoMusical", AcervoMusicalController.delete);

routes.post("/criarMusica"  , MusicaController.post);
routes.get("/listarMusica"   , MusicaController.list);
routes.get("/consultarMusica"   , MusicaController.lookup);
routes.get("/carregarMusica"  , MusicaController.get);
routes.get("/buscarMusicaExata"  , MusicaController.busca);
routes.put("/alterarMusica"   , MusicaController.put);
routes.get("/buscarMusica"    , MusicaController.catch);
routes.put("/excluirMusica", MusicaController.delete);


routes.post("/criarTiposDeTapes"  , Tipos_de_tapesController.post);
routes.get("/listaTiposDeTapes"   , Tipos_de_tapesController.list);
routes.get("/carregarTiposDeTapes"  , Tipos_de_tapesController.get)
routes.put("/alteraTiposDeTapes"   , Tipos_de_tapesController.put);
routes.get("/buscarTiposDeTapes"    , Tipos_de_tapesController.catch);
routes.get("/buscarDetail"    , DetailController.get);
routes.get("/listaDetail"    , DetailController.busca);
routes.put("/excluirTiposDeTapes", Tipos_de_tapesController.delete);

//routes.use(authMiddleware); //requer autenticação

export default routes;
