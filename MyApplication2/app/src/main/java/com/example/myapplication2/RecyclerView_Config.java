package com.example.myapplication2;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class RecyclerView_Config {
    private Context mContext;
    private BookAdapter mBooksAdapter;
    public void setConfig(RecyclerView recyclerView, Context context, List<Book> books, List<String> keys){
        mContext=context;
        mBooksAdapter=new BookAdapter(books,keys);
        recyclerView.setLayoutManager(new LinearLayoutManager(context));
        recyclerView.setAdapter(mBooksAdapter);

    }
    class BookItemView extends RecyclerView.ViewHolder{
        private TextView mdocument;
       /* private TextView mliv_emp;
        private TextView mnbchaise;
        private TextView mnbetud;
        private TextView mnbetudexiste;
        private TextView mtemp;*/
        private String key;
        public BookItemView(ViewGroup parent){
            super(LayoutInflater.from(mContext).inflate(R.layout.book_list_item,parent, false));
            mdocument=(TextView)itemView.findViewById(R.id.document_txtView);
        }
        public void bind(Book book , String key){
            mdocument.setText(book.getDocument());
            this.key=key;

        }


    }
    class BookAdapter extends RecyclerView.Adapter<BookItemView>{
        private List<Book> mBookList;
        private List<String> mKeys;

        public BookAdapter(List<Book> mBookList, List<String> mKeys) {
            this.mBookList = mBookList;
            this.mKeys = mKeys;
        }

        @NonNull
        @Override
        public BookItemView onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new BookItemView(parent);
        }

        @Override
        public void onBindViewHolder(@NonNull BookItemView holder, int position) {
            holder.bind(mBookList.get(position),mKeys.get(position));
        }

        @Override
        public int getItemCount() {
            return mBookList.size();
        }
    }
}
