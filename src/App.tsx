import React, {useEffect} from 'react';
import logo from './logo.svg';

type TNode = {
    value: number,
    left?: TNode,
    right?: TNode
}

/**
 * L'idée est de partir du premier nœud et de descendre de façon récursive
 * Dès qu'une différence est trouvée, on retourne un résultat
 * Les deux arbres sont identiques si et seulement si on arrive au bout et qu'ils s'arrêtent en même temps
 * Un TNode = undefined signifie qu'on est au bout d'une branche
 * @param {TNode} a
 * @param {TNode} b
 */
function compare(a: TNode | undefined, b: TNode | undefined): boolean {
    // Ici le cas où on est arrivé au bout, les deux nœuds sont instants
    if (a === undefined && b === undefined) return true

    // Si les deux nœuds ne sont pas undefined en même temps, mais qu'une
    // des deux branches se termine là ou l'autre continue, les arbres sont différents
    if (a === undefined || b === undefined) return false

    // Plus simplement si les valeurs des nœuds sont différentes...
    if (a.value !== b.value) return false

    // Sinon, on continue à descendre en comparant les deux routes droite et gauche
    return compare(a.left, b.left) && compare(a.right, b.right)
}

// BTree One

const aa: TNode = {
    value: 12
}

const a: TNode = {
    value: 12,
}

const b: TNode = {
    value: 12
}

const c: TNode = {
    value: 12,
    left: a,
    right: aa
}

const d: TNode = {
    value: 12,
    left: c,
    right: b
}

// BTree 2

const e: TNode = {
    value: 12
}

const f: TNode = {
    value: 12
}

const g: TNode = {
    value: 12
}

const h: TNode = {
    value: 12,
    left: f,
    right: e
}

const i: TNode = {
    value: 12,
    left: h,
    right: g
}

function App() {

    useEffect(() => {
        console.log(compare(i, d))
    })

    return (
        <h1>Binary Tree Comparison</h1>
    );
}

export default App;
