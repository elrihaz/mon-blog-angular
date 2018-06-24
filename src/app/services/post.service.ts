import { Post } from '../Models/post';

export class PostService {

    // tableau contenant les post
    post1: Post = new Post('Mon premier post', 'Nec sane cuius Gabini insignem conciderit ignominia una conciderit.', 1);
    post2: Post = new Post('Mon deuxième post', 'Ignobiles adsueti accepta quosdam quod quosdam mercede vitant venditare.', -2);
    post3: Post = new Post('Encore un post', 'Inviti fabulis reiciat hoc Graecis reiciat est facere aut inimicus primum Antiopam.', 0);

    posts: Array<Post> = [this.post1, this.post2, this.post3];

    onLovePost(index: number) {
        this.posts[index].loveIts++;
    }

    onDontLovePost(index: number) {
        this.posts[index].loveIts--;
    }

}
