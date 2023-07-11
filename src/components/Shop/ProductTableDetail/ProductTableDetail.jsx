import "./productTableDetail.scss";

export const ProductTableDetail = ({ infoData }) => {
  return (
    <>
      <div className="table-detail">
        <div>
          <h3>Detalles del producto</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Marca</th>
              <td>{infoData.brand}</td>
            </tr>
            <tr>
              <th>Modelo</th>
              <td>{infoData.model}</td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>{infoData.price}</td>
            </tr>
            <tr>
              <th>CPU</th>
              <td>{infoData.cpu}</td>
            </tr>
            <tr>
              <th>RAM</th>
              <td>{infoData.ram}</td>
            </tr>
            <tr>
              <th>Sistema Operativo</th>
              <td>{infoData.os}</td>
            </tr>
            <tr>
              <th>Resolución de pantalla</th>
              <td>{infoData.displayResolution}</td>
            </tr>
            <tr>
              <th>Batería</th>
              <td>{infoData.battery}</td>
            </tr>
            <tr>
              <th>Cámara</th>
              <td>{infoData.primaryCamera}</td>
            </tr>
            <tr>
              <th>Cámara Frontal</th>
              <td>{infoData.secondaryCmera}</td>
            </tr>
            <tr>
              <th>Dimensiones</th>
              <td>{infoData.dimentions}</td>
            </tr>
            <tr>
              <th>Peso</th>
              <td>{infoData.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
