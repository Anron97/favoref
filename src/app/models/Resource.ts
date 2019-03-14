export class Resource{
  title: string;
  img: string;
  link: string;
  isFavorite: boolean;

  constructor(title: string,
              img : string,
              link: string,
              isFavorite: boolean) {
    this.img = img;
    this.title = title;
    this.link = link;
    this.isFavorite = isFavorite;
  }
}
