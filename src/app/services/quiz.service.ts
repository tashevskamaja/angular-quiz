import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JAVASCRIPT } from "../data/javascript.data";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class QuizService {
  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  get(type: string): any {
    let data: any;
    switch (type) {
      case "javascript":
        return JAVASCRIPT;
    }
  }

  getAll() {
    return [{ id: "javascript", name: "JavaScript" }];
  }

  submitDataToLeaderboard(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("leaderboard")
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  readLeaderboard() { 
    return this.firestore.collection("leaderboard").snapshotChanges();
  }
}
