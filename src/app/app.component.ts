import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // classe post
  /*class post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title, content, loveIts) {
      this.title=title;
      this.content=content;
      this.loveIts=loveIts;
      this.created_at=new Date();
    }
  }*/
  
  // tableau des posts du blog
  postDate=new Date();
  posts=[
    {
      title: 'Mon premier post',
      content: 'Nec sane cuius Gabini insignem conciderit ignominia una conciderit consolatur se dum hoc consolatur hanc una ignominia cuius libidines quoniam conciderit insignem inusta dum esse praeter hac se fuerit se.',
      loveIts: 1,
      created_at: this.postDate
    },
    {
      title: 'Mon deuxième post',
      content: 'Lycaoniam et itinera ora Isauriae intersaepientes inveniretur in Lycaoniam et cum nihil Isauriae Isauriae igitur ora tempore ora contulerunt praetenturis ora provincialium ibique se contulerunt contulerunt intersaepientes provincialium igitur densis.',
      loveIts: -2,
      created_at: this.postDate
    },
    {
      title: 'Encore un post',
      content: 'Inviti fabulis reiciat hoc Graecis reiciat est facere aut inimicus primum Antiopam non aut difficilius Ennii quibus igitur reiciat fabellas hoc in fabulis Romano Graecis facere expressas delectet cum Latinas.',
      loveIts: 0,
      created_at: this.postDate
    }
  ];

  constructor() {}

}
