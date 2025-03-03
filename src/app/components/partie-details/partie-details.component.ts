import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Ajoutez Router pour la navigation
import { PartieService } from 'src/app/services/partie.service';
import { Partie } from 'src/core/models/partie';

@Component({
  selector: 'app-partie-details',
  templateUrl: './partie-details.component.html',
  styleUrls: ['./partie-details.component.css'],
})
export class PartieDetailsComponent implements OnInit {
  partie: Partie | undefined;

  constructor(
    private partieService: PartieService,
    private route: ActivatedRoute,
    private router: Router // Ajoutez Router pour rediriger après suppression
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.partieService.getPartie(id).subscribe((data) => {
      this.partie = data;
    });
  }

  // Méthode pour supprimer une partie
  deletePartie(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette partie ?')) {
      this.partieService.deletePartie(id).subscribe(() => {
        // Redirigez l'utilisateur vers la liste des parties après suppression
        this.router.navigate(['/parties']);
      });
    }
  }
}
