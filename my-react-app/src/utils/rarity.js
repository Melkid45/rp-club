export default function thisRarity(rarity) {
    if (!rarity) return;
    switch (rarity) {
        case 'Обычное':
            return 'common';
        case 'неОбычное':
            return 'uncommon';
        case 'Редкое':
            return 'rare';
        case 'Эпическое':
            return 'epic';
        case 'Легендарное':
            return 'legendary';
        case 'Уникальное':
            return 'unique';
        default:
            return '';
    }
}
