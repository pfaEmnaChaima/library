package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;

import java.util.List;

public class BookListActivity extends AppCompatActivity {
    private RecyclerView mRecyclerView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main_books);
        Intent intent = getIntent();
            mRecyclerView=(RecyclerView)findViewById(R.id.recyclerview_books);
            new FirebaseDatabaseHelper().readBooks(new FirebaseDatabaseHelper.DataStatus() {
                @Override
                public void DataIsLoaded(List<Book> books, List<String> keys) {
                    new RecyclerView_Config().setConfig(mRecyclerView, BookListActivity.this ,books,keys);
                }

                @Override
                public void DataInserted() {

                }

                @Override
                public void DataUpdated() {

                }

                @Override
                public void DataDeleted() {

                }
            });
        }
    }

