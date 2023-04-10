import { FC } from "react";
import { IRootState } from "../../store/store";
import Personaje from "../../types/personaje.types";
import { toggleFavorito } from "../../actions/favoritosAction";
import "./boton-favorito.css";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * @param {Personaje} personaje
 * @returns {React.ReactElement} JSX element
 */
const BotonFavorito: FC<{personaje: Personaje}> = ({personaje}) => {
    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
  const favoritoMap = useSelector((state) => state.favoritos.favoritosMapa);
  const dispatch = useDispatch();

  const src = require(favoritoMap.has(personaje.id)
  ? "../../assets/star-filled.png"
  : "../../assets/star.png");

/**
 * 
 * @param {event} event
 */
const toggleFavoritos = (event: React.MouseEvent<HTMLElement>) => {
  event.preventDefault();
  dispatch(toggleFavorito(personaje));
};

return (
  <button className="button-favorite" onClick={toggleFavoritos} type="button">
    <img src={src} alt={"favorito"} />
  </button>
);
};

export default BotonFavorito;