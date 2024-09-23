const container = document.getElementById('spreadsheet');
const hot = new Handsontable(container, {
    data: [],
    rowHeaders: true,
    colHeaders: true,
    startRows: 5,
    startCols: 5,
});

function formatData() {
    const inputData = document.getElementById('inputData').value.trim(); // Hilangkan spasi di awal dan akhir

    // Pisahkan data menjadi beberapa baris
    const rows = inputData.split('\n');
    
    // Proses setiap baris dan pisahkan elemen berdasarkan koma, titik, atau spasi
    const formattedData = rows.map(row => row.trim().split(/\s*[.]+\s*/)); // Regex memisahkan berdasarkan koma, titik, atau spasi

    // Masukkan data yang sudah diformat ke dalam spreadsheet
    hot.loadData(formattedData);
}
