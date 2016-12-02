# Collaborado

*Collaborado* is an open source project for connecting people. It is meant to bring together everything that is essential for any group that needs some organization. Doesn't matter how many people is involved because it is **you** who set the boundaries.

*We give you tools, you give it structure*

As simple as that!

---

# Harmonogram pracy

### 0. Wstęp
- [x] Zaznajomienie się ze stosem technologicznym (materiały i tutoriale: Meteor, Angular 1.5+, Angular Material)
- [x] Zdefiniowanie struktury projektu - integracja meteora z Angularem oraz przyjęcie konwencji do budowania kolejnych części składowych aplikacji (Maciej)

### 1. Prototyp (do 9 grudnia)
(cel: skończony front i podstawowa logika w angularze)

- [ ] Dashboard (Maciej)
  - [x] Baza HTML (8h)
  - [ ] Połączenie z komponentem logowania celem odbierania danych użytkownika (1h)
  - [ ] Połącznie z komponentem Sidebar celem odbierania danych profilu użytkownika + ustawień aplikacji (3h)
  - [ ] Wyświetlanie postów ze wszystkich channeli w grupie (komunikacja Sidebar <-> Posts poprzez Dashboard) (2h)
  
- [ ] Sidebar (Maciej)
  - [x] Baza HTML (16h)
  - [ ] Przepisanie modułu https://github.com/sovanna/angular-material-sidenav (4h)
  - [ ] Ustawienia profilu/aplikacji (popup) (3h)
  - [ ] Dodawanie grup (popup) (2h)
  - [ ] Dodawanie channeli (tylko admin grupy) (2h)
  - [ ] Dynamiczny routing dla grup i channeli (3h)
  - [ ] Mechanizm wybierania grup i channeli (kliknięcie w grupę resetuje channel) (1h)

- [ ] Posty
  - [ ] Nowy post
    - [x] Baza HTML (Karol + Maciej) (8h)
    - [ ] Obsługa tagów (2h) (Karol)
    - [ ] Dodawanie plików (2h) (Karol)
    - [ ] Flaga przypięty post (przypięte posty wyświetlane są jako pierwsze) (2h) (Karol)
    - [ ] Walidacje (2h) (Karol)
  - [ ] Post
    - [x] Baza HTML (Karol + Maciej) (8h)
    - [ ] Możliwość usuwania oraz edycji (3h) (Paweł)
    - [ ] Przejście do live-chat (popup) (2h) (Paweł)
  - [ ] Filtrowanie postów (sidebar z prawej strony) (Maciej)
    - [ ] Utworzenie sidebaru oraz komunikacja z listą postów (3h)
    - [ ] Wprowadzenie reguł filtrowania (po tagach, treści postu, zakresie dat) (3h)
  
- [ ] Live-chat (frontend tutaj jest prosty, natomiast backend już nie będzie taki trywialny) (8h) (Paweł)
  - [ ] Baza HTML (6h)
  - [ ] Wysyłanie wiadomości za pomocą enter (1h)
  
- [ ] Logowanie/rejestracja (Karol)
  - [x] Utworzenie formatki logowania (3h)
  - [x] Utworzenie formatki rejestracji (3h)
  - [x] Routing (/login, /register, przejście do /dashboard) (1h)
  - [ ] Walidacje (2h)

### 2. Wersja alpha (do 19 stycznia)
(cel: zamiana frontendowych zaślepek na działający backend)

- [ ] Dashboard
- [ ] Sidebar
- [ ] Posty
  - [ ] Timestampy (integracja z Moment.js) (2h)
- [ ] Live-chat
  - [ ] Timestampy (integracja z Moment.js) (2h)
- [ ] Logowanie/rejestracja
  - [ ] Sposób bezpiecznej autentykacji (przykład na stronie angular meteor)
  - [ ] Możliwość logowania za pomocą loginu oraz email
