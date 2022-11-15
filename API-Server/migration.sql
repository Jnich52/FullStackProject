DROP TABLE todolist CASCADE;
DROP TABLE goals CASCADE;


CREATE TABLE todolist (
    goal serial PRIMARY KEY,
    complete boolean NOT NULL
    
);
CREATE TABLE goals (
    id serial PRIMARY KEY,
    gDescription text,
    goal_id serial,
    FOREIGN KEY (goal_id) REFERENCES todolist(goal)
        ON DELETE CASCADE

);

