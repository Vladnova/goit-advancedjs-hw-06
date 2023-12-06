/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

type Props = {
  title: string;
}

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Props> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};