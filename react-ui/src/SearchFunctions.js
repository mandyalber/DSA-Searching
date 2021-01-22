const SearchFunctions = {
    dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],

    linearSearch: function (num) {
        console.log(this.dataset)
        let results = {
            found: false,
            counter: 0
        };

        for (let i = 0; i < this.dataset.length; i++) {
            results.counter = results.counter + 1
            if (this.dataset[i] === num) {
                results.found = true;
                return results
            };
        };
        return results;
    },

    binarySearch: function (num) {
        let dataSort = this.dataset.map(i => i).sort();

        let results = {
            found: false,
            counter: 0
        };

        function search(array, num, start, end) {
            results.counter = results.counter + 1;
            start = start === undefined ? 0 : start;
            end = end === undefined ? array.length : end;

            const index = Math.floor((start + end) / 2);
            let item = array[index];

            if (start > end) {
                results.found = false;
                return results;
            }
            if (item === num) {
                results.found = true;
                return results;
            }
            else if (item < num) {
                return search(array, num, index + 1, end);
            }
            else if (item > num) {
                return search(array, num, start, index - 1);
            };
        }
        return search(dataSort, num)
    }
}

export default SearchFunctions