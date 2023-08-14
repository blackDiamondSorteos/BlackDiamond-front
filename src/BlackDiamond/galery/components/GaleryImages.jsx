import image1 from "../../../assets/galery/imagen-shelby-1.jpg";
import image2 from "../../../assets/galery/imagen-shelby-2.jpg";
import image3 from "../../../assets/galery/imagen-shelby-3.jpg";
import image5 from "../../../assets/galery/imagen-shelby-5.jpg";
import image6 from "../../../assets/galery/imagen-shelby-6.jpg";
import image7 from "../../../assets/galery/imagen-shelby-7.jpg";
import image8 from "../../../assets/galery/imagen-shelby-8.jpg";
import image1webp from "../../../assets/galery/imagen-shelby-1.webp";
import image2webp from "../../../assets/galery/imagen-shelby-2.webp";
import image3webp from "../../../assets/galery/imagen-shelby-3.webp";
import image5webp from "../../../assets/galery/imagen-shelby-5.webp";
import image6webp from "../../../assets/galery/imagen-shelby-6.webp";
import image7webp from "../../../assets/galery/imagen-shelby-7.webp";

export const GaleryImages = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagenes de la izquierda */}
        <div className="grid grid-cols-2 grid-rows-1 col-span-3 gap-4">
          <div className="cover w-full h-1/2 bg-">
            <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
              <source srcSet={image7webp} type="image/webp" />
              <img
                src={image7}
                className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
              />
            </picture>
          </div>
          <div className="cover w-full h-auto">
            <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
              <source srcSet={image7webp} type="image/webp" />
              <img
                src={image8}
                className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagen sola de la izquierda */}
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
            <source srcSet={image2webp} type="image/webp" />
            <img
              src={image2}
              className="w-full h-full row-start-1 row-end-2 col-span-1 row-span-2 rounded-lg"
            />
          </picture>
        </div>
        {/* Imagenes de la derecha */}
        <div className="grid grid-cols-1 grid-rows-2 col-span-2 gap-8">
          <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
            <source srcSet={image1webp} type="image/webp" />
            <img
              src={image1}
              className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
            />
          </picture>
          <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
            <source srcSet={image3webp} type="image/webp" />
            <img
              src={image3}
              className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
            />
          </picture>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-1 gap-4">
        {/* Imagenes de la izquierda */}
        <div className="grid grid-cols-2 grid-rows-1 col-span-3 gap-4">
          <div className="cover w-full h-1/2 bg-">
            <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
              <source srcSet={image5webp} type="image/webp" />
              <img
                src={image5}
                className="w-full h-auto col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg"
              />
            </picture>
          </div>
          <div className="cover w-full h-auto">
            <picture className="w-full h-1/2 col-span-2 row-span-2 row-start-1 col-start-1 rounded-lg">
              <source srcSet={image6webp} type="image/webp" />
              <img
                src={image6}
                className="w-full h-full col-span-2 row-span-2 row-start-2 col-start-1 rounded-lg"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
