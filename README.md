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
  - [x] Struktura HTML (8h)
  - [x] Połączenie z komponentem logowania celem odbierania danych użytkownika (1h)
  - [ ] Wyświetlanie postów ze wszystkich channeli w grupie (komunikacja Sidebar <-> Posts poprzez Dashboard) (2h)

- [x] Sidebar (Maciej)
  - [x] Struktura HTML (16h)
  - [x] Przepisanie modułu https://github.com/sovanna/angular-material-sidenav na komponenty NG 1.5 (4h)
  - [x] Ustawienia profilu/aplikacji (popup) (3h)
  - [x] Dodawanie grup (popup) (2h)
  - [x] Dodawanie channeli (tylko admin grupy) (2h)
  - [x] Dynamiczny routing dla grup i channeli (4h)
  - [x] Mechanizm wybierania grup i channeli (kliknięcie w grupę resetuje channel) (1h)

- [ ] Posty
  - [x] Nowy post
    - [x] Struktura HTML (Karol + Maciej) (8h)
    - [x] Obsługa tagów (2h) (Karol)
    - [x] Dodawanie plików (4h) (Karol)
    - [x] Flaga przypięty post (przypięte posty wyświetlane są jako pierwsze) (4h) (Karol)
    - [x] Walidacje (2h) (Karol)
  - [ ] Post
    - [x] Struktura HTML (Karol + Maciej) (8h)
    - [ ] Możliwość usuwania oraz edycji (4h) (Paweł)
    - [ ] Przejście do live-chat (popup) (2h) (Paweł)
  - [ ] Filtrowanie postów (sidebar z prawej strony) (Maciej)
    - [ ] Utworzenie sidebaru oraz komunikacja z listą postów (3h)
    - [ ] Wprowadzenie reguł filtrowania (po tagach, treści postu, zakresie dat) (3h)

- [ ] Live-chat (frontend tutaj jest prosty, natomiast backend już nie będzie taki trywialny) (Paweł)
  - [x] Struktura HTML (8h)
  - [x] Wysyłanie wiadomości za pomocą enter (1h)

- [x] Logowanie/rejestracja (Karol)
  - [x] Utworzenie formatki logowania (4h)
  - [x] Utworzenie formatki rejestracji (4h)
  - [x] Routing (/login, /register, przejście do /dashboard) (1h)
  - [x] Walidacje (2h)

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
