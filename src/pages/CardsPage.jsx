import CardMars from "../components/CardMars";
import { useHook } from "../hooks/useHook";

const CardsPage = () => {
  const { data } = useHook();

  return (
    <div>
      {data?.photos.map((foto) => (
        //<div>{JSON.stringify(foto)}</div>
        <CardMars
          key={foto.id}
          name={foto.rover.name}
          total={foto.rover.total_photos}
          camera={foto.camera.name}
          image={foto.img_src}
        />
      ))}
    </div>
  );
};

export default CardsPage;
