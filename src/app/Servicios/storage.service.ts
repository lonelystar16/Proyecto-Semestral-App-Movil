import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private bdd:Storage = new Storage();
  private bddStatus:Promise<void>;
  
  constructor(private storage:Storage) { 
    this.bddStatus=this.onInit();
  }
  
  async onInit():Promise<void>{
    const storage = await this.storage.create();
    this.bdd = storage;
    console.log('Storage Listo', this.bdd);
  }

  async BDDConectada():Promise<void>{
    console.log('Esperando a que la BDD esté lista');
    await this.bddStatus;
    console.log('BDD Lista');
  }
  async get(key: string): Promise<any> {
    await this.BDDConectada()
    return this.bdd.get(key);
  }

  async set(key: string, valor: any) :Promise<any>{
    await this.BDDConectada()
    return this.bdd.set(key, valor);
  }
  async remove(key: string) {
    await this.BDDConectada()
    this.bdd.remove(key);
  }
}