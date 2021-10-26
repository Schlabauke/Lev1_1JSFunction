/* Deklariere die Funktion intro() und im Funktionskörper {}:
Deklariere die Variable a mit dem Wert 1 + 3.
Gebe zusätzlich Hello World in der Konsole aus.
Gebe den String “1+3 = ” + a in der Konsole aus. */
function intro() {
    let a = 1 + 3;
    console.log("Hello World")
    console.log("1+3 " + a)
}
intro()
/* Deklariere die Funktion intro2() mit dem Parameter (paramName) und einem Funktionskörper {}:
Deklariere die Variable varName mit dem Wert “SuperCoder”.
Gebe dazu “Hi, “ + varName + “. Mein Name ist ” + paramName + “ .” in der Konsole aus.
Denke daran die Geschweifte Klammer zu schließen.
Rufe die Funktion mit einem Argument auf. Gib als Argument deinen eigenen Namen ein. */

function intro2(paraName) {
    varName = "SuperCoder";
    console.log("Hi, " + varName + ". Mein Name ist " + paraName + " .")
}
intro2("Annabelle")

/* Deklariere die Funktion intro3() mit den drei Parametern name, stadt, alter.

Gebe unter Verwendung der entsprechenden Argumente folgende Sätze in der Konsole aus:
Hallo, mein Name ist SuperCoder. Ich bin 27 Jahre alt. Ich komme aus Düsseldorf.
Verwende deine persönlichen Daten.
 */
function intro3(name, stadt, alter) {
    console.log("Hallo mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt)
}
intro3("Batman", "Gotham City", 42)


/* Deklariere die Funktion math mit zwei Parametern und einem Funktionskörper:
Gib in der Konsole die Multiplikation von den beiden Parametern aus.
Gib in der Konsole die Division von den beiden Parametern aus.
Ruf die Funktion mit den Argumenten 10, 2 auf.
Teste auch andere Werte:
30, 20
100, 100
5, 0
45, 173
1, 1000
 */

function math(a, b) {
    console.log(a * b)
}
math(30, 20)
math(100, 100)
math(5, 0)
math(45, 173)
math(1, 1000)