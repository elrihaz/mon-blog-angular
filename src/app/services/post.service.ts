import { Post } from '../Models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    emitPosts() {
        this.postsSubject.next(this.posts);
      }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
    }

    getPosts() {
        firebase.database().ref('/posts')
        .on('value', (data: DataSnapshot) => {
            this.posts = data.val() ? data.val() : [];
            this.emitPosts();
        }
        );
    }

    onLovePost(index: number) {
        this.posts[index].loveIts++;
        this.savePosts();
        this.emitPosts();
    }

    onDontLovePost(index: number) {
        this.posts[index].loveIts--;
        this.savePosts();
        this.emitPosts();
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
        this.emitPosts();
    }

    removePost(post: Post) {
        const postIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(postIndexToRemove, 1);
        this.savePosts();
        this.emitPosts();
    }

    triTitrePosts(posts: Post[]) {
        let tab_en_ordre = false;
        let taille = posts.length;
        while (!tab_en_ordre) {
            tab_en_ordre = true;
            for (let i = 0 ; i < taille - 1 ; i++) {
                if (posts[i].title.toLocaleUpperCase() > posts[i + 1].title.toLocaleUpperCase()) {
                    const tempPost = posts[i];
                    posts[i] = posts[i + 1];
                    posts[i + 1] = tempPost;
                    tab_en_ordre = false;
                }
            }
            taille--;
        }
        this.emitPosts();
    }

    triDatePosts(posts: Post[]) {
        let tab_en_ordre = false;
        let taille = posts.length;
        while (!tab_en_ordre) {
            tab_en_ordre = true;
            for (let i = 0 ; i < taille - 1 ; i++) {
                const dateI = new Date(posts[i].createdAt);
                const dateIPlus1 = new Date(posts[i + 1].createdAt);
                if (dateI > dateIPlus1) {
                    const tempPost = posts[i];
                    posts[i] = posts[i + 1];
                    posts[i + 1] = tempPost;
                    tab_en_ordre = false;
                }
            }
            taille--;
        }
        this.emitPosts();
    }

}
