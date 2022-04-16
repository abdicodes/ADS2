/** Function to return index of parent in implicit heap representation */
function parent(index) {
    return Math.floor((index - 1) / 2);
}

/** ES6 function equivalent of function shown above*/
const PARENT = (index) => {
    return Math.floor((index - 1) / 2);
}

const LEFT = (index) => {
    return (2 * index) + 1;
}

const RIGHT = (index) => {
    return (2 * index) + 2;
}

const SWAP = (heap, index1, index2) => {
    // [heap[index1], heap[index2]] = [heap[index2], heap[index1]];
    let temp = heap[index2];
    heap[index2] = heap[index1];
    heap[index1] = temp;
    return heap;
}

const INSERT = (heap, val) => {
    let pos = heap.length;
    heap[pos] = val;
    
    while ((pos > 0) && (heap[PARENT(pos)]) < heap[pos]) {
        SWAP(heap, PARENT(pos), pos);
        pos = PARENT(pos);
    }
}

const ExtractMax = (heap) => {
    let max = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    MaxHeapify(heap, 0);
    return max;
}

const MaxHeapify = (heap, root) => {
    let largest = IndexOfLargest(heap, root);

    if (largest != root) {
        SWAP(heap, largest, root);
        MaxHeapify(heap, largest);
    }
}

const IndexOfLargest = (heap, root) => {
    let left = LEFT(root);
    let right = RIGHT(root);
    let max = root;

    if (heap.length >= left && heap[root] < heap[left]) {
        max = left;
    }

    if (heap.length >= right && heap[root] < heap[right] && heap[left] < heap[right]) {
        max = right;
    }
    
    return max;
}

/**Build max heap in-place */
const BuildMaxHeap = (array) => {
    let heapSize = array.length;

    for (let i = Math.floor(heapSize/2); i>= 0; i--) {
        MaxHeapify(array, i);
    }
    return array;
}

const HeapSort = (array) => {
  BuildMaxHeap(array);
  let heapSize = array.length;
  let sorted = [];

  while (heapSize > 0) {
    let i = heapSize - 1;
    sorted[i] = ExtractMax(array);
    heapSize--;
  }
  return sorted;
}

let heap = [];

[23, 34, 36, 37, 98, 20].forEach((elem) => {
    INSERT(heap, elem);
});

// console.log(heap);
// console.log(ExtractMax(heap));
// console.log(heap);

// let arr = [5, 1, 9, 95, 94, 36, 93, 55, 23, 47];
// // BuildMaxHeap(arr);
// HeapSort(arr);


// let q1 = [0,22,28,69,31,29,51,24];
// console.log(BuildMaxHeap(q1));

let q2 = [10,63,64,28,54,22,29,38];
console.log(BuildMaxHeap(q2));
