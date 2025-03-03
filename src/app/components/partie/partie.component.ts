import { Component, OnInit } from '@angular/core';
import { PartieService } from '../../services/partie.service';
import { Partie } from 'src/core/models/partie'; // Ajustez le chemin selon votre structure

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css'],
})
export class PartieComponent implements OnInit {
  parties: Partie[] = [];
  selectedPartie: Partie = new Partie();
  isEditing: boolean = false;

  constructor(private partieService: PartieService) {}

  ngOnInit(): void {
    this.loadParties();
  }

  loadParties(): void {
    this.partieService.getParties().subscribe((data) => {
      this.parties = data;
    });
  }

  editPartie(partie: Partie): void {
    this.selectedPartie = { ...partie };
    this.isEditing = true;
  }

  savePartie(): void {
    if (this.isEditing) {
      this.partieService
        .updatePartie(this.selectedPartie.id, this.selectedPartie)
        .subscribe(() => {
          this.loadParties();
          this.resetForm();
        });
    } else {
      this.partieService.createPartie(this.selectedPartie).subscribe(() => {
        this.loadParties();
        this.resetForm();
      });
    }
  }

  deletePartie(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette partie ?')) {
      this.partieService.deletePartie(id).subscribe(() => {
        this.loadParties();
      });
    }
  }

  resetForm(): void {
    this.selectedPartie = new Partie();
    this.isEditing = false;
  }
}
