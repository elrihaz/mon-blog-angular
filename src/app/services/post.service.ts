import { Post } from '../Models/post';

export class PostService {

    // tableau contenant les post
    post1:Post = new Post('Mon premier post','Nec sane cuius Gabini insignem conciderit ignominia una conciderit consolatur se dum hoc consolatur hanc una ignominia cuius libidines quoniam conciderit insignem inusta dum esse praeter hac se fuerit se.',1);
    post2:Post = new Post('Mon deuxième post', 'Ignobiles adsueti accepta quosdam quod quosdam mercede vitant venditare eo et et et adsueti et adsueti subditicios infaustos vitant quosdam enim lucris accepta adsueti inserunt inserunt nomenclatores et quoque eo.', -2);
    post3:Post = new Post('Encore un post', 'Inviti fabulis reiciat hoc Graecis reiciat est facere aut inimicus primum Antiopam non aut difficilius Ennii quibus igitur reiciat fabellas hoc in fabulis Romano Graecis facere expressas delectet cum Latinas.', 0);

    posts: Array<Post>=[this.post1, this.post2, this.post3]

    onLovePost(index:number) {
        this.posts[index].loveIts++;
    }

    onDontLovePost(index:number) {
        this.posts[index].loveIts--;
    }

}