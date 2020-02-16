# Ćwiczenie 2 - "Walidacja"

## Cel zadania*

Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:

a) Ma długość od 3 do 10 znaków
b) Zawiera jeden ze znaków specjalnych - !, @ lub #
c) Zawiera cyfrę

_Przykład:_

``` validatePassword('test') // => false
    validatePassword('test11!') // => true
```

## Punkty dodatkowe

Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie spełnia tego warunku, funkcja powinna rzucić wyjątek.
