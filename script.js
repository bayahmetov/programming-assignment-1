function calculateROI() {
    // 1. Получение данных (Input)
    const name = document.getElementById('userName').value;
    const cost = parseFloat(document.getElementById('satCost').value);
    const maneuvers = parseInt(document.getElementById('maneuverCount').value);
    const outputDiv = document.getElementById('output');

    // Проверка на пустые поля
    if (!name || isNaN(cost) || isNaN(maneuvers)) {
        outputDiv.innerHTML = "Пожалуйста, заполните все поля корректно.";
        return;
    }

    // 2. Процесс (Calculation)
    // Формула: 1 маневр экономит примерно 0.5% ресурса спутника (условно для NeuralX)
    // Экономия = (Кол-во маневров * 0.005) * Стоимость спутника
    const savings = (maneuvers * 0.005) * cost;

    // 3. Классификация (Conditional Logic)
    let category = "";
    if (savings <= 0) {
        category = "Экономия отсутствует. Требуется оптимизация NeuralX.";
    } else if (savings < 5) {
        category = "Низкая эффективность: Спасены незначительные средства.";
    } else if (savings >= 5 && savings < 50) {
        category = "Средняя эффективность: Значительное продление срока службы!";
    } else {
        category = "Высокая эффективность: Вы лидер рынка по сохранению активов!";
    }

    // 4. Вывод (Output)
    outputDiv.innerHTML = `
        <p><strong>Привет, ${name}!</strong></p>
        <p>Ваша расчетная экономия: <strong>$${savings.toFixed(2)} млн</strong></p>
        <p>Статус: <em>${category}</em></p>
    `;
}
