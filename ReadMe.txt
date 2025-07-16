# 🧮 calc\_project

> Calculatrice Web simple en **HTML + CSS + JavaScript**

---

## 🌟 Objectif

Créer une application web capable d'effectuer les **quatre opérations mathématiques de base** :

* ➕ Addition
* ➖ Soustraction
* ✖️ Multiplication
* ➗ Division

---

## 🛠️ Technologies utilisées

| Fonction        | Technologie          |
| --------------- | -------------------- |
| Structure       | HTML5                |
| Mise en forme   | CSS3 (Flex)     |
| Fonctionnalités | JavaScript (vanilla) |

---

## 📁 Structure du projet

Le dossier du projet doit obligatoirement être nommé **`calc_project`** :

```
calc_project/
├── index.html     # Structure HTML de la calculatrice
├── style.css      # Mise en forme avec CSS
└── script.js      # Logique de calcul et interactions
```

---

## 📋 Fonctionnalités à implémenter

* ✅ Interface simple avec :

  * Un écran d’affichage
  * Des boutons de chiffres (0 à 9)
  * Des boutons pour les opérateurs `+`, `-`, `*`, `/`
  * Un bouton `=` pour afficher le résultat
  * Un bouton `C` pour réinitialiser

* ✅ Calcul en temps réel lors du clic sur `=`

* ✅ Effacement complet avec `C`

* ✅ Gestion des erreurs :

  * Division par zéro
  * Double opérateurs consécutifs
  * Opérations invalides

---

## 🎨 Recommandations CSS

* Utiliser **CSS Grid** ou **Flexbox** pour organiser les boutons
* Appliquer des styles modernes :

  * Boutons cliquables avec effet `hover` et `active`
  * Responsive sur mobile
  * Polices lisibles et contrastées

---

## 🧠 Recommandations JavaScript

* Gérer les entrées avec des fonctions dédiées :

  * `appendNumber()`
  * `chooseOperation()`
  * `compute()`
  * `clear()`

* Utiliser `addEventListener` pour capter les clics sur les boutons

---

## 📀 Aperçu suggéré

```
 -------------------
|     12 + 7        |   ← Écran
 -------------------
|  7  |  8  |  9  | / |
|  4  |  5  |  6  | * |
|  1  |  2  |  3  | - |
|  0  |  C  |  =  | + |
```

---

## 🚀 Déploiement local

```bash
git clone https://github.com/votre-utilisateur/calc_project.git
cd calc_project
# Ouvrez index.html dans votre navigateur
```

---

## ⭐ Bonus (facultatif)

* Support des touches du clavier (`keydown`)
* Mode sombre / clair
* Historique des opérations effectuées