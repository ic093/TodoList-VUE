import { defineStore } from "pinia";
export const noteStore = defineStore("notes", {
  //notes 是為取資料的名稱，可以自取
  state: () => ({
    notes: [
      {
        id: 1,
        title: "完成練習",
        content: "完成vue練習",
        isPinned: false,
      },
      {
        id: 2,
        title: "整理房間",
        content: "整理櫃子與抽屜",
        isPinned: false,
      },
      {
        id: 3,
        title: "洗碗",
        content: "還要拖地",
        isPinned: true,
      },
      {
        id: 4,
        title: "運動",
        content: "完成vue練習",
        isPinned: true,
      },
    ],
  }),
  getters: {
    pinnedNotes(state) {
      return state.notes.filter((note) => note.isPinned);
      //filter((note) => note.isPinned) 中的 note 是指 state.notes 陣列中的每一個元素，也就是每一個筆記對象
      //state.notes 是一個包含多個筆記對象的陣列。
      //filter 是一個陣列方法，用來過濾陣列中的元素。它會對陣列中的每一個元素執行回呼函數（這裡是 (note) => note.isPinned），然後返回一個新陣列，這個新陣列只包含那些使回呼函數返回 true 的元素。
      //note 是這個回呼函數的參數，代表 state.notes 陣列中的當前元素，也就是當前正在被 filter 方法處理的筆記對象。
      //所以，filter((note) => note.isPinned) 的意思是：對 state.notes 陣列中的每個 note 進行檢查，如果 note.isPinned 為 true，那麼這個 note 就會包含在 finshedNotes 返回的新陣列中。反之，note 將被過濾掉，不會包含在新陣列中。
    },
  },
  actions: {
    //變更資料狀態的涵式區
    addNote(title, content) {
      if (title.length === 0) {
        return;
      }
      this.notes.push({
        id: Math.floor(Math.random() * 1000),
        content: content,
        title: title,
        isPinned: false,
      });
    },
    markedPin(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].isPinned = !this.notes[index].isPinned;
      }
    },
    //這行程式碼使用 findIndex 方法來在 notes 陣列中尋找與提供的 id 相匹配的筆記。findIndex 方法會遍歷陣列中的每個元素，並根據提供的回呼函數（這裡是 (note) => note.id === id）檢查每個元素。如果找到一個筆記的 id 與傳遞進來的 id 相等，則返回該筆記在陣列中的索引。

    //note.id === id：這裡 note 是 notes 陣列中的一個元素（即每個筆記對象），note.id 是該筆記的 ID。這個比較會檢查每個筆記的 ID 是否等於傳遞進來的 id。

    //findIndex 返回的結果： 如果找到符合條件的筆記，則返回它在陣列中的索引；如果找不到，則返回 -1。
    //接下來，程式碼檢查 index 是否不是 -1（即確保找到了符合條件的筆記）。如果 index 有效，則對應筆記的 isPinned 屬性會被切換為相反的值。

    //this.notes[index].isPinned = !this.notes[index].isPinned：這行程式碼將筆記的 isPinned 狀態進行反轉。如果當前 isPinned 為 true，則變為 false；如果為 false，則變為 true。
    //這樣，你就可以透過呼叫 markedPin(id) 函數來切換指定 id 的筆記是否被置頂（釘選）。這個功能對於筆記應用程式來說非常實用，因為它允許使用者動態地管理哪些筆記應該被釘選。

    editNote(id, title, content) {
      //更新資料
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].title = title;
        this.notes[index].content = content; //如果 id 對應的筆記存在，則更新該筆記的 title 和 content；如果找不到對應的筆記（即 index === -1），則不做任何操作。
      }
    },
    deleteNote(id) {
      //this.notes:
      //this 代表 noteStore 的實例，所以 this.notes 是指 noteStore 裡面的 notes 狀態。
      //notes 是一個包含多個筆記對象的陣列，這個陣列是定義在 noteStore 的 state 中。
      //總結:
      //在這段程式碼中，this 是指向 noteStore 的實例，因此可以用來存取該 store 的狀態和方法。在 deleteNote 方法裡，this.notes 就是指向這個 store 的 notes 狀態。

      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes.splice(index, 1); //splice 方法的第一個參數是要刪除元素的起始位置，第二個參數是要刪除的元素個數。在這裡，splice(index, 1) 表示從 notes 陣列的 index 位置開始，刪除一個元素。
      }
    },
    searchNotes(keyword) {
      this.keyword = keyword.toLowerCase();
      this.searchResults = this.notes.filter(
        (note) =>
          note.title.toLowerCase().includes(this.keyword) ||
          note.content.toLowerCase().includes(this.keyword)
      ); //這段代碼將每個 note 的標題轉換為小寫，並檢查其中是否包含 this.keyword（即用戶輸入的關鍵字）。如果包含，該條件為真。
    },
  },
});
