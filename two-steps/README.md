# Ćwiczenie 6 - "W dwóch krokach"

## Cel zadania*

Zaimplementuj funkcję, która zwróci kolejną funkcję dodającą do przekazywanego parametru zarejestrowany wcześniej przedrostek.

_Przykład:_

``` const greeting = withPrefix('Witaj, ');
    greeting('Janek'); // => 'Witaj, Janek'
    greeting('Tomek'); // => 'Witaj, Tomek'

    const goodbye = withPrefix('Żegnaj, ');
    goodbye('Janek'); // => 'Żegnaj, Janek'
    goodbye('Tomek'); // => 'Żegnaj, Tomek'
```

Utworzona funkcja to tzw. funkcja wyższego rzędu.

## Punkty dodatkowe

Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie spełnia tego warunku, funkcja powinna rzucić wyjątek.
