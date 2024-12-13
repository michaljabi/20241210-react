export function AddAuctionPage() {
    return (
        <>
            <h2>Dodaj aukcje</h2>
            <section className="mt-2 row">
                <div className="col-6">
                    <img
                        className="img-thumbnail"
                        alt="Photo preview"
                        src="https://picsum.photos/id/8/600/600"
                    />
                </div>
                <div className="col-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="auctionTitle">Auction name</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-edit"/>
                                  </span>
                                </div>
                                <input
                                    id="auctionTitle"
                                    type="text"
                                    name="title"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="auctionPrice">Price</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-tag"/>
                                  </span>
                                </div>
                                <input
                                    id="auctionPrice"
                                    type="number"
                                    name="price"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="imgId">Photo</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="fa fa-image"/>
                                  </span>
                                </div>
                                <input
                                    id="imgId"
                                    type="number"
                                    name="imgId"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="auctionDescription">Description</label>
                            <div className="input-group mb-3">
                                <textarea
                                    id="auctionDescription"
                                    rows={5}
                                    className="form-control"
                                    name="description"
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button className="btn btn-primary" type="submit">
                                <i className="fa fa-gavel"/> Add auction
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
