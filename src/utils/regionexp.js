function regionexp(id) {
  switch (id) {
    // 경복궁
    case "0":
      return /0[0-9]|1[0-4]/;
    // 이태원
    case "1":
      return /1[5-9]|2[0-9]/;
    // 강남
    case "2":
      return /3[0-9]|4[0-4]/;
    // 해운대
    case "3":
      return /4[5-9]|5[0-9]/;
    // 제주
    case "4":
      return /6[0-9]|7[0-4]/;
    // 홍대
    case "5":
      return /7[5-9]|8[0-9]/;
    default:
      return 0;
  }
}

export default regionexp;
