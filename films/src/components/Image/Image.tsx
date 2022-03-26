export interface IImage {
  image: string;
}

export const Image = ({ image }: IImage) => {
  return <img src={image} alt="image" />;
};
