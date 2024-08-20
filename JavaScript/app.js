let opportunity = 2;

let question = [
    [        
        0,
        "Được xây dựng vào năm 1880.",
        "Là nơi làm việc của chính quyền Việt Nam Cộng hòa trước năm 1975.",
        "Có tên khác là Dinh Độc Lập.",
        "./Image/1.jpg",
        "Dinh Thống Nhất"
    ],
    [
        1,
        "Đỉnh cao nhất là Fansipan.",
        "Thường được gọi là 'Nóc nhà Đông Dương'",
        "Nằm ở tỉnh Lào Cai, gần thị trấn Sa Pa.",
        "./Image/2.jpg",
        "Dãy Hoàng Liên Sơn"
    ],
    [
        2, 
        "Nằm trên cao nguyên Lâm Viên.",
        "Nổi tiếng với tên gọi 'Thành phố ngàn hoa'.",
        "Có hồ Xuân Hương và thung lũng Tình Yêu.",
        "./Image/3.jpeg",
        "Đà Lạt"
    ],
    [
        3, 
        "Nằm ở tỉnh Tây Ninh.",
        "Được gọi là 'ngọn núi thiêng' và là nơi có chùa Bà Đen nổi tiếng.",
        "Tên núi có nghĩa là 'núi của bà đen'.",
        "./Image/4.jpg",
        "Núi Bà Đen"
    ],
    [
        4, 
        "Nằm ở tỉnh Quảng Ninh.",
        "Được UNESCO công nhận là Di sản thiên nhiên thế giới vào năm 1994.",
        "Có hàng ngàn đảo đá vôi nhô lên từ biển.",
        "./Image/5.jpg",
        "Vịnh Hạ Long"
    ],
    [
        5, 
        "Nằm ở tỉnh Quảng Nam.",
        "Được UNESCO công nhận là Di sản văn hóa thế giới.",
        "Được xây dựng từ thế kỷ thứ 4 đến thế kỷ thứ 14.",
        "./Image/6.jpg",
        "Thánh địa Mỹ Sơn"
    ],
    [
        6, 
        "Nằm ở tỉnh Điện Biên.",
        "Chiến dịch này diễn ra vào năm 1954.",
        "Nơi diễn ra cuộc chiến thắng lịch sử của Việt Minh.",
        "./Image/7.jpg",
        "Điện Biên Phủ"
    ],
    [
        7, 
        "Nằm ở thành phố Đà Nẵng.",
        "Nổi tiếng với cát trắng mịn và nước biển trong xanh.",
        "Tên bãi biển này bắt nguồn từ một từ Hán-Việt có nghĩa là 'nước biển đẹp như tơ lụa'.",
        "./Image/8.jpg",
        "Bãi biển Mỹ Khê"
    ],
    [
        8, 
        "Nằm ở phía Nam của Việt Nam, thuộc tỉnh Kiên Giang.",
        "Được biết đến với tên gọi 'đảo ngọc'.",
        "Nổi tiếng với các bãi biển đẹp và là nơi sản xuất ngọc trai.",
        "./Image/9.jpg",
        "Phú Quốc"
    ],
    [
        9, 
        "Nổi tiếng với chợ nổi Cái Răng.",
        "Tên thành phố này có nghĩa là 'con sông có thể uống nước'.",
        "Có trường Đại học Cần Thơ, một trong những trường đại học lớn nhất miền Tây.",
        "./Image/10.jpg",
        "Cần Thơ"
    ],
    [
        10, 
        "Nằm ở miền Bắc Việt Nam, bên bờ biển Đông.",
        "Là nơi có bánh đa cua và các món hải sản nổi tiếng.",
        "Tên thành phố này có nghĩa là 'con đường dẫn ra biển'.",
        "./Image/HAIPHONG.jpg",
        "Hải Phòng"
    ],
    [
        11, 
        "Thành phố này nằm ở miền Trung Việt Nam.",
        "Nổi tiếng với cây cầu Rồng phun nước.",
        "Đây là cửa ngõ dẫn đến phố cổ Hội An.",
        "./Image/DANANG.jpg",
        "Đà Nẵng"
    ],
    [
        12, 
        "Thành phố này nằm ở phía Bắc Việt Nam.",
        "Có Tràng An, một khu du lịch sinh thái nổi tiếng.",
        "Đây là quê hương của cố đại tướng Võ Nguyên Giáp.",
        "./Image/NINHBINH.jpeg",
        "Ninh Bình"
    ],
    [
        13, 
        "Đây là một tỉnh nằm ở miền Bắc Việt Nam.",
        "Nơi đây có khu di tích đền Hùng, nơi tổ chức lễ Giỗ Tổ Hùng Vương hàng năm.",
        "Tỉnh này có thành phố Việt Trì.",
        "./Image/PHUTHO.jpg",
        "Phú Thọ"
    ],
    [
        14, 
        "Tỉnh này nằm ở miền Trung Việt Nam.",
        "Nơi đây có chùa Hương Tích, được mệnh danh là 'Hoan Châu đệ nhất danh lam'.",
        "Tỉnh này có thành phố Vinh.",
        "./Image/NGHEAN.png",
        "Nghệ An"
    ],
    [
        15, 
        "Nơi đây có Hồ Gươm và Lăng Chủ tịch Hồ Chí Minh.",
        "Khu phố cổ với 36 phố phường nổi tiếng.",
        "Cầu Thê Húc và Tháp Rùa là biểu tượng của thành phố này.",
        "./Image/HANOI.jpg",
        "Hà Nội"
    ],
    [
        16, 
        "Thành phố này có bờ biển dài và đẹp.",
        "Nổi tiếng với tháp Bà Ponagar và hòn Mun.",
        "Là thủ phủ của tỉnh Khánh Hòa.",
        "./Image/NHATRANG.jpg",
        "Nha Trang"
    ],
    [
        17, 
        "Thành phố này nằm ở vùng núi Tây Bắc Việt Nam.",
        "Nổi tiếng với đồi chè xanh mướt và thác Dải Yếm.",
        "Có nhiều lễ hội văn hóa của dân tộc Thái và H'Mông.",
        "./Image/SONLA.jpg",
        "Sơn La"
    ],
    [
        18, 
        "Tỉnh này có đèo Hải Vân và sông Hương.",
        "Thành phố Huế là trung tâm văn hóa của tỉnh này.",
        "Nổi tiếng với Cố đô Huế và các lăng tẩm của các vị vua nhà Nguyễn, được UNESCO công nhận là di sản thế giới.",
        "./Image/HUE.webp",
        "Thừa Thiên Huế"
    ],
    [
        19, 
        "Có các di tích văn hóa Champa cổ như tháp Chàm.",
        "Nổi tiếng với các bãi biển đẹp như Hoàng Hậu.",
        "Tỉnh này có nhiều di tích lịch sử và khu du lịch biển.",
        "./Image/BINHDINH.jpg",
        "Bình Định"
    ],
    [
        20, 
        "Có các cánh đồng xanh và vườn trái cây phong phú.",
        "Nổi tiếng với chợ nổi và các hoạt động tham quan sông nước.",
        "Nằm ở đồng bằng sông Cửu Long.",
        "./Image/VINHLONG.webp",
        "Vĩnh Long"
    ],
    [
        21, 
        "Có Hồ Ba Bể, một trong những hồ nước ngọt lớn nhất miền Bắc.",
        "Nổi tiếng với phong cảnh núi non và các bản làng dân tộc.",
        "Tỉnh này nằm ở miền Bắc, gần biên giới Trung Quốc.",
        "./Image/BACKAN.jpg",
        "Bắc Kạn"
    ],
    [
        22, 
        "Được biết đến với các bãi biển đẹp và các khu nghỉ dưỡng cao cấp.",
        "Nổi tiếng với đồi cát đỏ và trắng với cảnh quan độc đáo.",
        "Có các điểm đến như Mũi Né và hải sản tươi ngon.",
        "./Image/PHANTHIET.jpg",
        "Phan Thiết"
    ],
    [
        23, 
        "Có lễ hội Chùa Hương nổi tiếng.",
        "Nổi tiếng với các món ăn như bánh cuốn và phở.",
        "Nằm gần thủ đô Hà Nội.",
        "./Image/HATAY.jpg",
        "Hà Tây"
    ],
    [
        24, 
        "Có các khu rừng ngập mặn và bãi biển đẹp.",
        "Nổi tiếng với các hoạt động du lịch sinh thái.",
        "Tỉnh này nằm ở miền Nam Việt Nam và được mệnh danh là 'Đất Mũi Cực Nam Tổ quốc'.",
        "./Image/CAMAU1.png",
        "Cà Mau"
    ],
    [
        25, 
        "Có nhiều khu nghỉ dưỡng cao cấp và bãi biển đẹp.",
        "Nổi tiếng với các hoạt động thể thao biển như lướt sóng và lặn biển.",
        "Tỉnh này nằm ở miền Nam Việt Nam, nổi tiếng với khí hậu nhiệt đới.",
        "./Image/VUNGTAU.webp",
        "Bà Rịa-Vũng Tàu"
    ],
    [
        26, 
        "Có các bãi biển đẹp như Mỹ Khê và Non Nước.",
        "Nổi tiếng với các công trình di tích Champa như tháp Po Nagar.",
        "Tỉnh này nằm ở miền Trung Việt Nam và có nhiều khu du lịch biển.",
        "./Image/KHANHHOA.jpg",
        "Khánh Hòa"
    ]
    ,
    [
        27, 
        "Có hồ nước ngọt lớn gọi là Hồ Trị An.",
        "Nổi tiếng với các hoạt động ngoài trời như chèo thuyền và cắm trại.",
        "Tỉnh này nằm ở miền Nam Việt Nam.",
        "./Image/DONGNAI.jpg",
        "Đồng Nai"
    ]
    ,
    [
        28, 
        "là một hang động thuộc vườn quốc gia Phong Nha - Kẻ Bàng",
        "là Di sản thiên nhiên thế giới được UNESCO công nhận.",
        "Nằm ở tỉnh Quảng Bình.",
        "./Image/DONGPHONGNHA.jpg",
        "Động Phong Nha"
    ]
    ,
    [
        29, 
        "là tỉnh miền núi tiếp giáp với Thủ đô Hà Nội",
        "có nhiều điểm du lịch hấp dẫn như: Hang động thiên tạo đa dạng Động Tiên, động Tiên Phi,... ",
        "là nơi đặt Nhà máy Thủy điện Hòa Bình.",
        "./Image/HOABINH.jpg",
        "Hoà Bình"
    ]
];

let eventQuestionData = localStorage.getItem("eventQuestionData");
if (eventQuestionData) {
    let questionData = JSON.parse(eventQuestionData);
    question = questionData;
}

let analyst = {
    TotalPlay: 0,
    TotalAnswer: 0,
    NoAnswer: 0,
    WrongAnswer: 0,
    RightAnswer: 0
  };

const eventAnalystData = localStorage.getItem("eventAnalystData_MiniGame1");
if (eventAnalystData) {
    const ObjectData = JSON.parse(eventAnalystData);
    analyst = ObjectData;
}

// MARK: Hàm xáo trộn lại câu hỏi
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// MARK: thực hiện sáo trộn lần đầu tiên
let shuffledQuestions = shuffleArray([...question]);

// MARK: thêm modal, button vào count vào HTML
UpdateButton();
UpdateModal();
UpdateCount();

function UpdateButton() {
    const container = document.querySelector(".main-bottom");
    container.innerHTML = "";
    for (const [ idx ] of shuffledQuestions) {
        const HTMLStructure = `<button id="btn_click" data-bs-toggle="modal" data-bs-target="#${idx}"><i class="fa-solid fa-question"></i></button>`;
        container.innerHTML += HTMLStructure;
    }
    if (question.length < 1) {
        container.innerHTML += `<h1 class="airMessage">Đã hết câu hỏi</h1>`;
    }
}

function UpdateModal() {
    const container = document.querySelector(".modal-list");
    container.innerHTML = "";
    let count = 1;
    for (const [idx, suggest1, suggest2, suggest3, src] of shuffledQuestions) {
        const HTMLStructure = `<div class="modal fade" id="${idx}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Câu hỏi số ${count + 1}</h1>
                                            <button type="button" class="btn-close" style="display: none;" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="alert alert-warning information" role="alert">
                                                <p><b>Hãy đoán đây là địa danh gì của Việt Nam</b></p>
                                                <p>Bạn chỉ có 3 gợi ý nhưng mỗi lần bạn mở một gợi ý thì phần thưởng sẽ giảm xuống! Hãy cân nhắt trước khi mở gợi ý nhé</p>
                                            </div>
                                            <div class="suggest">
                                                <div class="suggest-left">
                                                    <!-- https://via.placeholder.com/300 nếu lấy ảnh chụp demo ppt thì dùng link này -->
                                                    <!-- <img src="${src}"> -->
                                                    <img src="${src}">
                                                </div>
                                                <div class="suggest-right">
                                                    <div class="suggest-right-top">
                                                        <p><b>Gợi ý 1:</b> <span class="hide" id="question-${idx}-suggest-1">${suggest1}</span> <button type="button" onclick="Show(this)" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></p>
                                                        <p><b>Gợi ý 2:</b> <span class="hide" id="question-${idx}-suggest-2">${suggest2}</span> <button type="button" onclick="Show(this)" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></p>
                                                        <p><b>Gợi ý 3:</b> <span class="hide" id="question-${idx}-suggest-3">${suggest3}</span> <button type="button" onclick="Show(this)" class="btn btn-primary"><i class="fa-solid fa-eye"></i></button></p>
                                                    </div>
                                                    <div class="suggest-right-bottom">
                                                        <!-- <h1>Poly's Travel</h1> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <input type="text" id="answer-${idx}" placeholder="Câu trả lời của bạn" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                        </div>
                                        <div class="modal-footer">
                                            <h6>Cơ hội còn lại: <span id="opportunity">2</span></h6> | 
                                            <h6>Thời gian còn lại: <span id="timeout">00:30</span></h6>
                                            <button type="button" class="btn btn-primary" onclick="CheckAnswer(this, ${idx})">Gửi câu trả lời</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>`;
        container.innerHTML += HTMLStructure;
        count++;
    }
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('show.bs.modal', function () {
            startCountdown(this.id);
            opportunity = 2;
            analyst.TotalPlay++;
            localStorage.setItem("eventAnalystData_MiniGame1", JSON.stringify(analyst));
        });
    });
}

function CheckAnswer(items, idx) {
    analyst.TotalAnswer++;
    const element = items.parentElement.parentElement;
    const opportunity_display = element.querySelector("#opportunity");
    const opened = element.querySelectorAll(".hide");
    const countOpened = opened.length;

    let answer = document.getElementById(`answer-${idx}`).value.toLowerCase();
    if (answer == "") {
        Swal.fire({
            title: "Opps..",
            text: "Bạn cần điền đáp án để tiếp tục",
            icon: "error"
          });
    }
    else {
        if (answer == question[idx][5].toLowerCase()) {
            switch (countOpened) {
                case 3:
                    Swal.fire({
                        title: "Đáp án chính xác",
                        text: "Bạn đã nhận được 1 giftcode loại 1 và 1 ly nước ngọt tự chọn",
                        icon: "success"
                    });
                    break;
                case 2:
                    Swal.fire({
                        title: "Đáp án chính xác",
                        text: "Bạn đã nhận được 1 giftcode loại 1",
                        icon: "success"
                    });
                    break;
                case 1:
                    Swal.fire({
                        title: "Đáp án chính xác",
                        text: "Bạn đã nhận được 1 giftcode loại 2",
                        icon: "success"
                    });
                    break;
                case 0:
                    Swal.fire({
                        title: "Đáp án chính xác",
                        text: "Bạn đã nhận được 1 giftcode loại 3",
                        icon: "success"
                    });
                    break;
                default:
                    const close = element.querySelector(".btn-close");
                    close.click();
                    shuffledQuestions = shuffleArray([...question]);
                    UpdateButton();
                    UpdateModal();
                    return;
            }
            analyst.RightAnswer++;
            deleteQuestion(question, idx, idx);
            let questionJSON = JSON.stringify(question);
            localStorage.setItem("eventQuestionData", questionJSON);
            const close = element.querySelector(".btn-close");
            close.click();
            shuffledQuestions = shuffleArray([...question]);
            UpdateButton();
            UpdateModal();
            UpdateCount();
        }
        else {
            analyst.WrongAnswer++;

              if (opportunity < 1) {
                clearInterval(countdownTimer);
                Swal.fire({
                    title: "Đáp án chưa chính xác",
                    text: "Bạn đã hết cơ hội để trả lời",
                    icon: "error"
                });
                const close = element.querySelector(".btn-close");
                close.click();
                shuffledQuestions = shuffleArray([...question]);
                UpdateButton();
                UpdateModal();
              }
              else {
                    Swal.fire({
                        title: "Đáp án chưa chính xác",
                        text: `Bạn còn chỉ còn ${opportunity} cơ hội cuối cùng thôi`,
                        icon: "error"
                    });
                    opportunity--;
                UpdateOpportunityDisplay(opportunity_display);
              }
        }
    }
    localStorage.setItem("eventAnalystData_MiniGame1", JSON.stringify(analyst));
}

function UpdateOpportunityDisplay(display) {
    display.textContent = opportunity;
}

function Show(btn) {
    const element = btn.parentElement;
    const suggest = element.querySelector("span");
    const button = element.querySelector("button");
    suggest.classList.remove("hide");
    button.remove();

    const modal = element.closest('.modal');
    const timeoutElement = modal.querySelector('#timeout');
    timeoutElement.textContent = formatTime(timeLeft - 12);
    timeLeft -= 12;
}

function deleteQuestion(array, indexArray, indexElement) {
    array.splice(indexElement, 1);
  
    for (let i = indexArray; i < array.length; i++) {
      array[i][0] = i;
    }
}
  
function UpdateCount() {
    const countShow = document.getElementById("numberOfQuestions").textContent = question.length;
}

let countdownTimer;
let timeLeft = 30;

function startCountdown(modalId) {
    timeLeft = 60;
    const modal = document.getElementById(modalId);
    const timeoutElement = modal.querySelector('#timeout');

    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {
        timeLeft--;
        timeoutElement.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);

            analyst.NoAnswer++;
            localStorage.setItem("eventAnalystData_MiniGame1", JSON.stringify(analyst));

            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
            Swal.fire({
                title: "Hết giờ!",
                text: "Bạn đã hết thời gian trả lời câu hỏi.",
                icon: "warning"
            });
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}